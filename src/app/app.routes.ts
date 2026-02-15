import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Start } from './start/start';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'start', component: Start },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
