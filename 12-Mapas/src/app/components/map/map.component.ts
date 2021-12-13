import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Marker } from '../../Class/marker';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapEditComponent } from './map-edit.component';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  markers: Marker[] = [];
  lat = 51.678418;
  lng = 7.809007;

  constructor( private snackBar: MatSnackBar,
               private dialog: MatDialog ) 
  {
    this.loadStorage();
  }

  ngOnInit(): void {
  }

  addMarker( event: any )
  {
    const coords: { lat:number, lng: number } = event.coords;
    const newMarker = new Marker( coords.lat, coords.lng );
    
    this.markers.push( newMarker );
    this.saveStorage();
    this.snackBar.open('Marker saved', 'Undo', { duration: 3000 });
  }

  editMarker( marker: Marker )
  {
    const dialogRef = this.dialog.open( MapEditComponent, {
      width: '250px',
      data: { title: marker.title, description: marker.description },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      if( !result) { return; }
      console.log(result)
      marker.title = result.title;
      marker.description = result.description;
      this.saveStorage();
      this.snackBar.open('Marker updated', 'Undo', { duration: 3000 });
    });
  }

  deleteMarker( i: number ){
  
    this.markers.splice(i, 1);
    this.saveStorage();
    this.snackBar.open('Marker removed', 'Undo', { duration: 3000 });
  }

  saveStorage()
  {
    localStorage.setItem('markers', JSON.stringify( this.markers ))
  }

  loadStorage()
  {
    if( localStorage.getItem('markers') ){
      this.markers = JSON.parse( localStorage.getItem('markers')! );
    }
    
  }

}
