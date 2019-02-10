import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

declare var $:any;

@Component({
  selector: 'chord-section',
  templateUrl: './chord.component.html',
  styles: []
})
export class ChordComponent implements OnInit {
	data:any;
  bandName:string;
  bandTitle:string;
	s:any;
	a:any;
	e:any;
  r:any;
  t:any;
  min:any;
  max:any;
  calc:number;
  i:number;

  gm:any;
  gi:any;
  gd:any;
  gs:any;
  gc:any;
  go:any;
  gp:any;
  gr:any;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { 
  	this.data = {};
    this.data.other =[];
    // let keyArr: any[] = Object.keys(environment.getData("ase"));
    // this.data.arrKey = keyArr;

  }

  ngOnInit() {   
    this.getLoading(1);
    this.getChord();
    this.gc = ['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B','C','Db','D','D#','E','F','Gb','G','G#','A','A#','B'];
    this.gr = /C#|D#|F#|G#|A#|Db|Eb|Gb|Ab|Bb|C|D|E|F|G|A|B/g;
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

  getTitleBand(s,a,e){
    if(a != "soi"){
      this.getLoading(1);
      this.http.get('assets/data/chord/dbalbumlist/albumlist-'+s+'.js').subscribe((data:any) => {
        this.data.other=[];
        for(this.t=0; this.t < data.length; this.t++){
          if(a == data[this.t].id_band && e != data[this.t].id){
            this.data.other.push(data[this.t]);
          }
        }
        this.getLoading(0);
      });
    }
  }
  
  defaultReplace(e:any){
    e = e.replace(/Gb/g,"F#");
    e = e.replace(/Ab/g,"G#");
    e = e.replace(/Bb/g,"A#");
    e = e.replace(/Db/g,"C#");
    e = e.replace(/Eb/g,"D#");
    return e;
  }

  chordDecode(chord:any){
    chord = this.defaultReplace(chord);
                
    chord = chord.replace(/A:s1:([a-z])/g, "a:s1:$1");
    chord = chord.replace(/:([A-Z])(.*?):/g, ':<span class="text-info">$1$2</span>:');

    chord = chord.replace(/http(.*?):x/g, ":x");

    chord = chord.replace(/:s10:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    chord = chord.replace(/:s9:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    chord = chord.replace(/:s8:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    chord = chord.replace(/:s7:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    chord = chord.replace(/:s6:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    chord = chord.replace(/:s5:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    chord = chord.replace(/:s4:/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    chord = chord.replace(/:s3:/g, "&nbsp;&nbsp;&nbsp;");
    chord = chord.replace(/:s2:/g, "&nbsp;&nbsp;");
    chord = chord.replace(/:s1:/g, "&nbsp;");
    chord = chord.replace(/:x5:/g, "<br><br><br><br><br>");
    chord = chord.replace(/:x4:/g, "<br><br><br><br>");
    chord = chord.replace(/:x3:/g, "<br><br><br>");
    chord = chord.replace(/:x2:/g, "<br><br>");
    chord = chord.replace(/:x1:/g, "<br>");

    if(chord == '' || !chord || 0 === chord.length) { 
      chord = 'Mohon maaf perjalanan anda terganggu, sedang ada perbaikan jalan.'; 
    }

    return (chord);
  }

  getChord(){
    this.route.params.subscribe(params => {
      this.s = params['s'];
      this.a = params['a'];
      this.e = params['e'];

      for(this.r=0; this.r<this.e; this.r=this.r+100){
        this.min = this.r;
        this.max = this.r + 100;
      }
      this.getLoading(1);
      this.http.get('assets/data/chord/db/chord'+this.min+'-'+this.max+'.js').subscribe(data => {
        $(".soi").html('').append(this.chordDecode(data[this.e].isi));


        this.bandName = data[this.e].nama_band;
        this.bandTitle = data[this.e].judul;
        this.s = data[this.e].id_abjad;
        this.a = data[this.e].id_band;
        this.data.result = data[this.e];
        
        this.execHistory(data[this.e]);
        this.getTitleBand(this.s, this.a, this.e);
        this.getLoading(0);
      });
    });
  }

  execHistory(a:any){
    let i = 0;
    let s = {
      'id':a.id,
      'id_abjad':a.id_abjad,
      'id_band':a.id_band,
      'nama_band':a.nama_band,
      'judul':a.judul
    }

    this.data.history = [];
    if(localStorage.getItem('history')){
      this.data.history = JSON.parse(localStorage.getItem('history'));  
    }
    for(i=0; i<this.data.history.length; i++){
      if(this.data.history[i].id == s.id){
        this.data.history.splice(i,1);
      }
    }
    if(this.data.history.length >= 10){
      this.data.history.splice(0,1);
    }
    this.data.history.push(s);
    localStorage.setItem('history',JSON.stringify(this.data.history));
  }

  changeChordPlus(){
    this.gd = $(".soi").html();
    this.gd = this.gd.replace(/kr3s/g, "#");
    this.gp = this.gd.split(this.gr);
    this.i = 0;
    this.go = "";
    while (this.gm = this.gr.exec(this.gd)){
      this.gi = this.gc.indexOf(this.gm[0]);
      this.go += this.gp[this.i++] + this.gc[this.gi+1];
    }
    this.go += this.gp[this.i];
    this.go = this.defaultReplace(this.go);
    this.go = this.go.replace(/<img(.*?)#(.*?)>/g, "");
    $(".soi").html(this.go);
  }

  changeChordMinus(){
    this.gd = $(".soi").html();
    this.gd = this.gd.replace(/kr3s/g, "#");
    this.gp = this.gd.split(this.gr);
    this.i = 0;
    this.go = "";
    while (this.gm = this.gr.exec(this.gd)){
      this.gi = this.gc.indexOf(this.gm[0],1);
      this.go += this.gp[this.i++] + this.gc[this.gi-1];
    }
    this.go += this.gp[this.i];
    this.go = this.defaultReplace(this.go);
    this.go = this.go.replace(/<img(.*?)#(.*?)>/g, "");
    $(".soi").html(this.go);
  }
}