import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { Movimenti } from './components/movimenti/movimenti';


export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'conto/movimenti',component:Movimenti}

];