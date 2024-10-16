import { Routes } from '@angular/router';
import {NotFoundComponent} from "./shared/components/not-found.component";
import {DashboardComponent} from "./features/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
