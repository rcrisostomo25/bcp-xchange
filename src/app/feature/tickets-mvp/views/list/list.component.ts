import { Component, inject } from '@angular/core';
import { ITicket } from '../../../../shared/models/ticket.model';
import { TicketsMvpController } from '../../application/tickets-mvp.controller';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  providers: [TicketsMvpController]
})
export class ListComponent {

  private ticketsMvpController = inject(TicketsMvpController);

  public tickets: ITicket[] = [];

  ngOnInit(): void {
    this.ticketsMvpController.getTickets().subscribe((tickets) => {
      this.tickets = tickets;
    });
  }
}
