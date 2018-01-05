import { Routes } from '@angular/router';
import { BiblioComponent } from './biblio.component';
import { LivresComponent } from './livres/livres.component';
import { UrlComponent } from './url/url.component';

export const ROUTES: Routes = [
    {
        path:'', component: BiblioComponent,
        children: [
            {
                path:'livres', component: LivresComponent
            },
            {
                path:'url', component: UrlComponent
            }
        ]
    }
]