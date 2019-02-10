import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'parallax-section',
  templateUrl: './parallax.component.html'
})
export class ParallaxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$('.soi-background').parallax({
      imageSrc: 'assets/images/nissan_skyline.jpg',
      speed: 0.2,
      naturalWidth: 1366,
      naturalHeight: 768
    });
  }

}
