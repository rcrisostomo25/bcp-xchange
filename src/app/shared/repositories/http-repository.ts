import { InjectionToken } from "@angular/core";
import { FirestoreRepository } from "../domain/firestore-repository";
import { FirestoreHttpRepository } from "./firestore-http-repository";

export const FIRESTORE_SHARED_REPOSITORY = new InjectionToken<FirestoreRepository>('FirestoreRepository', {
    providedIn: 'root',
    factory: () => new FirestoreHttpRepository()
});