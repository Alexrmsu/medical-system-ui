import { Routes } from '@angular/router';
import {NotFoundComponent} from "./shared/components/not-found.component";
import {DashboardComponent} from "./features/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
