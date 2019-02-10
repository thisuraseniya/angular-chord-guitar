import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'history-section',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {
	data :any;
	s:any;

  constructor() {
  	this.data={};
  }

  ngOnInit() {
  	if(localStorage.getItem('history')){
      this.historyInit();
    }else{
      this.clearStorage();  
    }
  }

  historyInit(){
  	this.data.history =[];
    this.data.temp = JSON.parse(localStorage.getItem('history'));
    let i = 0;
    let o = this.data.temp.length-1;
    for(i=o; i>=0; i--){
      this.data.history.push(this.data.temp[i]);
    }
  }

  clearStorage(){
    localStorage.history = [];
    this.data.history = [];
  }
}