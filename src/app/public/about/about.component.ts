import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'about-section',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
	wishlist:any;
  more:any;
  less:any;

  constructor() { 
  	this.wishlist = [
  		"Search Result",
  		"Database (MongoDB)",
  		"Popular Chord",
  		"History",
  	];

    this.more = [
      "Fast Loading",
      "Pitch Tune",
      "Mobile Ready",
    ];

    this.less = [
      "First Loading (slow)",
      "Searching (Still Going)"
    ];
  }

  ngOnInit() {
  }

}
