import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-map-edit',
  templateUrl: './map-edit.component.html',
  styleUrls: ['./map-edit.component.css']
})
export class MapEditComponent implements OnInit {

  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<MapEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  
    this.form = formBuilder.group({
      'title': data.title,
      'description': data.description 
    });
    

  }
  
  ngOnInit(): void {
  }

  saveChanges()
  {
    this.dialogRef.close( this.form.value );
  }

  onNoClick()
  {
    this.dialogRef.close();
  }

}
