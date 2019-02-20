import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BandComponent } from './band/band.component';
import { ChordComponent } from './chord/chord.component';
import { AboutComponent } from './about/about.component';
import { TitleComponent } from './title/title.component';
export const ROUTES: Routes = [
    { 
      path: '', 
      component: HomeComponent,
      children: [
        {
          path: 'public',
          component: HomeComponent,
          data: {
            name: 'home'
          }
        }
      ]
    },
    { 
      path: 'band/:s', 
      component: BandComponent,
    },
    { 
      path: 'title/:s/:a', 
      component: TitleComponent,
    },
    { 
      path: 'chord/:s/:a/:e', 
      component: ChordComponent,
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: '**',
      component: AboutComponent
    }

];
