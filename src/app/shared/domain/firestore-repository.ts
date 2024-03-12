import { Observable } from "rxjs";
import { ITicket } from "../models/ticket.model";
import { ITeamMembers } from "../models/team-members.model";
import { IAgileInfo } from "../models/agile-info.model";

export interface FirestoreRepository {
    getTicketsCollection(path: string): Observable<ITicket[]>;
    getTeamMembersCollection(path: string): Observable<ITeamMembers[]>;
    getAgileInfoCollection(path: string): Observable<IAgileInfo[]>
}