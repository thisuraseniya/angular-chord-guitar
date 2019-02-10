import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recent-section',
  templateUrl: './recent.component.html'
})
export class RecentComponent implements OnInit {
	data :any;
	s:any;

  constructor() { 
  	this.data = {};
  }

  ngOnInit() {
      this.recentInit();
  }

  recentInit(){
  	this.data.recent =[];
    this.data.temp = JSON.parse('[{"id":"8561","id_abjad":"2","id_band":"1472","nama_band":"A Fine Frenzy","judul":"Almost Lover"},{"id":"47188","id_abjad":"6","id_band":"1792","nama_band":"Ed Sheeran","judul":"Postcards"},{"id":"13477","id_abjad":"6","id_band":"1792","nama_band":"Ed Sheeran","judul":"Autumn Leaves"},{"id":"9994","id_abjad":"3","id_band":"1541","nama_band":"Babyshambles","judul":"352 Days"},{"id":"44092","id_abjad":"2","id_band":"1461","nama_band":"A Ha","judul":"Cry Wolf"},{"id":"327","id_abjad":"3","id_band":"118","nama_band":"Backyardigans [indie]","judul":"Tenggelam Dalam Hidupmu"},{"id":"53463","id_abjad":"4","id_band":"4467","nama_band":"Caca Handika (Dangdut)","judul":"Angka Satu"},{"id":"13447","id_abjad":"6","id_band":"1792","nama_band":"Ed Sheeran","judul":"A Team"},{"id":"13476","id_abjad":"6","id_band":"1792","nama_band":"Ed Sheeran","judul":"Addicted"},{"id":"56332","id_abjad":"6","id_band":"1792","nama_band":"Ed Sheeran","judul":"Perfect"}]');
    let i = 0;
    let o = this.data.temp.length-1;
    for(i=o; i>=0; i--){
      this.data.recent.push(this.data.temp[i]);
    }
  }

  clearStorage(){
    localStorage.recent = [];
    this.data.recent = [];
  }
}
