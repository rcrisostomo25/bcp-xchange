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
  },
  {
    path: 'agile-info',
    component: LayoutComponent,
    children: [
        { path: '', loadChildren: () => import('./feature/agile-info/agile-info.routes').then(m => m.AGILEINFO_ROUTES) },
    ]
  },
  {
    path: 'releases',
    component: LayoutComponent,
    children: [
        { path: '', loadChildren: () => import('./feature/releases/releases.routes').then(m => m.RELEASES_ROUTES) },
    ]
  }
];
