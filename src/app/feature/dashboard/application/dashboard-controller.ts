import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { FIRESTORE_SHARED_REPOSITORY } from "../../../shared/repositories/http-repository";
import { ITicket } from "../../../shared/models/ticket.model";
import { ITeamMembers } from "../../../shared/models/team-members.model";

export class DashboardController {

    private readonly firestoreRepository = inject(FIRESTORE_SHARED_REPOSITORY);

    getTeamMembers(): Observable<ITeamMembers[]> {
        return this.firestoreRepository.getTeamMembersCollection('team-members');
    }
}