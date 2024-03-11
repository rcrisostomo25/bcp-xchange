import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './views/main/main.component';

export const DASHBOARD_ROUTES: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    {
        path: '',
        component: DashboardComponent,
        children: [
          { path: 'main', component: MainComponent }
        ]
      }
];