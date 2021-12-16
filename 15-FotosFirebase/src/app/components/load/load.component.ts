import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { LoadImagesService } from '../../services/load-images.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styles: [
  ]
})
export class LoadComponent implements OnInit {

  files: FileItem[] = [];
  isOnDrop: boolean = false;

  constructor( public _loadImages: LoadImagesService ) { }

  ngOnInit(): void {
  }

  loadImages()
  {
    this._loadImages.loadImagesFirebase( this.files );
  }

  cleanFiles()
  {
    this.files = [];
  }

}
