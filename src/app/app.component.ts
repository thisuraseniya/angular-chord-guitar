import { Component } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, } from '@angular/router';
import * as Waves from 'node-waves/dist/waves.js';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Spirit Of Inovation';
  loading:any;
  constructor(private router: Router){
    Waves.init();
  	router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
          localStorage.loading = 1;
          this.getLoading();
      }
      if (event instanceof NavigationEnd) {
          localStorage.loading = 0;
          this.getLoading();
      }

    });
  }

  getLoading(){
  	if(localStorage.loading == 1){
  		$(".preloader").show();
  	}else{
  		window.scrollTo(0, 0);
  		$(".preloader").fadeOut();
  	}
  }
}
