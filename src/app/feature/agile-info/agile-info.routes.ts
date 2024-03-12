import { Routes } from '@angular/router';
import { AgileInfoComponent } from './agile-info.component';
import { ListComponent } from './views/list/list.component';

export const AGILEINFO_ROUTES: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    {
        path: '',
        component: AgileInfoComponent,
        children: [
          { path: 'list', component: ListComponent }
        ]
      }
];