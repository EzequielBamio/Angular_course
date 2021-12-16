import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class LoadImagesService {

  private FOLDER_IMAGES = 'img';

  constructor( private db: AngularFirestore,
               private storage: AngularFireStorage ) { }

  loadImagesFirebase( images: FileItem[] )
  {
    // const storageRef = firebase.storage().ref();
  
    for( const item of images )
    {
      item.isUploading = true;
      if(item.progress !== undefined && item.progress >= 100)
      {
        continue;
      }

      const file = item.file;
      const filePath = `${ this.FOLDER_IMAGES }/${ item.fileName }`;
      const fileRef = this.storage.ref( filePath );
      const uploadTask = this.storage.upload(filePath, file);
 
      // con esta función nos suscribimos a los cambios en el progreso
      uploadTask.percentageChanges().subscribe( resp => item.progress = resp);
      // obtengo el url de descarga cuando este disponible
      uploadTask.snapshotChanges().pipe(
        finalize(
          () => fileRef.getDownloadURL().subscribe( url => {
            console.log('Imagen cargada con exito');
            item.url = url;
            item.isUploading = false;
            this.saveImage({
              nombre: item.fileName,
              url: item.url
            });
          })
        )
      ).subscribe();
    }
  }

  private saveImage( image: {nombre: string, url: string}) {

    this.db.collection(`/${ this.FOLDER_IMAGES }`).add( image )

  }
  
}
