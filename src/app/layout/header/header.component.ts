import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

declare var $:any;

@Component({
  selector: 'header-section',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  lang:any;
  constructor( private translate: TranslateService ) {
  	translate.setDefaultLang("en");
  }

  ngOnInit() {
    this.lang = localStorage.getItem("lang");
    if(!this.lang){
      localStorage.lang = "en";
    }
  }

  changeLang(e:string) {
  	this.lang = localStorage.getItem("lang");

  	//if (!this.lang || this.lang == "en"){
  	//	localStorage.setItem("lang","id");
  	//}else{
  	//	localStorage.setItem("lang","en");
  	//}
    
    localStorage.setItem("lang",e);
  	this.translate.use(e);
    this.lang = localStorage.getItem("lang");  
  }

  
  getLangStatus(e:string){
    if(e == localStorage.lang){
      return true;
    }else{
      return false;
    }
  }
  langFlag(d:string){
    return 'assets/images/lang_'+d+'.png';
  }
}
