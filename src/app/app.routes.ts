import { Routes } from '@angular/router';
import {NotFoundComponent} from "./shared/components/not-found.component";

export const routes: Routes = [
  {
    path: '**',
    component: NotFoundComponent
  },
];
