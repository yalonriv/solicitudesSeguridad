import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: LoginComponent}, 
    { path: 'dashboard', component: DashboardComponent},
    { path: 'candidatos', loadComponent: () => import('./pages/candidatos/candidatos.component').then(m => m.CandidatosComponent) },
    //{ path: 'tipos-solicitudes', loadComponent: () => import('./pages/tipos-solicitudes/tipos-solicitudes.component').then(m => m.TiposSolicitudesComponent) }

    
];

