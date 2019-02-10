import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from './../../../environments/environment';

declare var $:any;

@Component({
  selector: 'home-section',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
	data : any;
  constructor(
    private titleService: Title
  ) { 
    this.titleService.setTitle('Spirit Of Inovation');
  	this.data = {};
  }
  
  ngOnInit() {
    $('.soi-background').parallax({
      imageSrc: 'assets/images/nissan_skyline.jpg',
      speed: 0.2,
      naturalWidth: 1366,
      naturalHeight: 768
    });
  }
}
