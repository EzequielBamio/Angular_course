import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  applySound( number: number ) : void{
    const audio = new Audio();
    audio.src = `../assets/sounds/note${number}.wav`;
    audio.load();
    audio.play();
  }

}
