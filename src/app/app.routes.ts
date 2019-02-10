import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { FooterComponent } from './layout/footer/footer.component';

export const ROUTES: Routes = [
    { 
      path: '', 
      component: PublicComponent,
      children : [
        {
          path: '',
          loadChildren: './public/public.module#PublicModule'
        }
      ]
    }
];