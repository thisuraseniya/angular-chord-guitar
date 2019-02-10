import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'search-section',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
	searchValue: any;
  data:any;  
  constructor(
  	private http:HttpClient,
    private router:Router
  ) {
  	this.searchValue = "";
  }

  ngOnInit() {
    this.http.get('/assets/data/chord/searchList.js').subscribe( (data) => {
      this.data = data;
    });

    $("#search").on("change",(e) => {
      console.log("jalan");
      if (this.searchValue != "") {
        this.router.navigate(["/chord","sae","soi",this.searchValue.id]);
      }
    });
  }
}
