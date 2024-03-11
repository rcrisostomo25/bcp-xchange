import { Observable } from "rxjs";
import { ITicket } from "../models/ticket.model";
import { ITeamMembers } from "../models/team-members.model";

export interface FirestoreRepository {
    getTicketsCollection(path: string): Observable<ITicket[]>;
    getTeamMembersCollection(path: string): Observable<ITeamMembers[]>;
}