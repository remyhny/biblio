import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


export const ROUTES: Routes = [
    {
        path:'', component: LoginComponent
    },
    {
        path:'biblio', loadChildren:'./biblio/biblio.module#BiblioModule'
    }
]