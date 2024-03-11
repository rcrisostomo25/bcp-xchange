import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { FIRESTORE_SHARED_REPOSITORY } from "../../../shared/repositories/http-repository";
import { ITicket } from "../../../shared/models/ticket.model";

export class TicketsMvpController {

    private readonly firestoreRepository = inject(FIRESTORE_SHARED_REPOSITORY);

    getTickets(): Observable<ITicket[]> {
        return this.firestoreRepository.getTicketsCollection('tickets');
    }
}