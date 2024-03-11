import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collectionData, collection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirestoreRepository } from '../domain/firestore-repository';
import { orderBy, query } from 'firebase/firestore';
import { ITeamMembers } from '../models/team-members.model';
import { ITicket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreHttpRepository implements FirestoreRepository {

  private firestore: Firestore = inject(Firestore);

  constructor() { }

  getTicketsCollection(path: string): Observable<ITicket[]> {
    const itemCollection = collection(this.firestore, path);
    const colQuery = query(itemCollection, orderBy('fechaRegistro', 'desc'));
    return collectionData(colQuery, {
      idField: 'id',
    }) as Observable<ITicket[]>;
  }

  getTeamMembersCollection(path: string): Observable<ITeamMembers[]> {
    const itemCollection = collection(this.firestore, path);
    const colQuery = query(itemCollection, orderBy('orden', 'asc'));
    return collectionData(colQuery, {
      idField: 'id',
    }) as Observable<ITeamMembers[]>;
  }
}
