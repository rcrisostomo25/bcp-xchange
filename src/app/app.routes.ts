import { Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
        { path: '', loadChildren: () => import('./feature/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES) },
    ]
  },
  {
    path: 'tickets-mvp',
    component: LayoutComponent,
    children: [
        { path: '', loadChildren: () => import('./feature/tickets-mvp/tickets-mvp.routes').then(m => m.TICKETSMVP_ROUTES) },
    ]
  }
];
