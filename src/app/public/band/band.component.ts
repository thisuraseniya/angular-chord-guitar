import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
declare var $:any;

@Component({
  selector: 'band-section',
  templateUrl: './band.component.html',
  styles: []
})
export class BandComponent implements OnInit {
  data : any;
  s:any;
  a:any;
  r:any;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { 
  	this.data = {};
    this.data.obj = environment.band;
    this.data.result=[];
  }

  ngOnInit() {
    this.getLoading(1);
    this.route.params.subscribe(params => {
       this.s = params['s'];
       this.data.selectedChar = environment.char[this.s];
    });
  }

  getLoading(a){
    $(".parallax-mirror").remove();
    if(a == 1){
      $(".preloader").show();
    }else{
      window.scrollTo(0, 0);
      $(".preloader").fadeOut();
    }
  }

  getTitle(a){
    this.a = a;
    this.getLoading(1);
    this.http.get('assets/data/chord/dbalbumlist/albumlist-'+this.s+'.js').subscribe((data:any) => {
      this.data.result=[];
      for(this.r=0; this.r < data.length; this.r++){
        if(a == data[this.r].id_band){
          this.data.selectedBand = data[this.r].nama_band;
          this.data.result.push(data[this.r]);
        }
      }
      this.getLoading(0);
    });
  }
}
