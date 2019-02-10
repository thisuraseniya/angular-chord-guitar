import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'footer-section',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
 
  constructor( private translate: TranslateService ) { 
  	translate.use(localStorage.getItem("lang"));
  }

  ngOnInit() {
  }

}
