import { Routes } from '@angular/router';
import { ReleasesComponent } from './releases.component';
import { ListComponent } from './views/list/list.component';

export const RELEASES_ROUTES: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    {
        path: '',
        component: ReleasesComponent,
        children: [
          { path: 'list', component: ListComponent }
        ]
      }
];