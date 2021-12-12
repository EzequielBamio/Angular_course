import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/navApp-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() films: Film[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      loop: true
    });
  }

}
