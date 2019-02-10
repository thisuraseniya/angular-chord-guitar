import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'alphabet-section',
  templateUrl: './list-alphabet.component.html'
})
export class ListAlphabetComponent implements OnInit {
	s:any;
  constructor(private route: ActivatedRoute) {
  	
  	this.route.params.subscribe(params => {
			this.s = params['s']
    });
  }

  ngOnInit() {
  }

}
