import { Routes } from '@angular/router';
import { TicketsMvpComponent } from './tickets-mvp.component';
import { ListComponent } from './views/list/list.component';

export const TICKETSMVP_ROUTES: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    {
        path: '',
        component: TicketsMvpComponent,
        children: [
          { path: 'list', component: ListComponent }
        ]
      }
];