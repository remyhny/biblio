import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BiblioComponent } from './biblio.component';
import { ROUTES } from './biblio.routes';
import { LivresComponent } from './livres/livres.component';
import { UrlComponent } from './url/url.component';

@NgModule({
  declarations: [BiblioComponent, LivresComponent, UrlComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class BiblioModule { }
