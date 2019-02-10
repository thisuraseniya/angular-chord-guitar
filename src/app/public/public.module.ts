import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './public.routes';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

import { ListAlphabetComponent } from '../components/list-alphabet/list-alphabet.component';
import { HistoryComponent } from '../components/history/history.component';
import { RecentComponent } from '../components/recent/recent.component';
import { SideRecentComponent } from '../components/side-recent/side-recent.component';

import { ParallaxComponent } from '../components/parallax/parallax.component';

import { HomeComponent } from './home/home.component';
import { BandComponent } from './band/band.component';
import { ChordComponent } from './chord/chord.component';
import { AboutComponent } from './about/about.component';
import { TitleComponent } from './title/title.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NguiAutoCompleteModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
            deps: [HttpClient]
      }
    })
  ],
  declarations: [
    ListAlphabetComponent,
    HistoryComponent,
    RecentComponent,
    SideRecentComponent,
    HomeComponent,
    BandComponent, 
    ChordComponent, 
    AboutComponent,
    ParallaxComponent,
    TitleComponent
  ]
})
export class PublicModule { }

