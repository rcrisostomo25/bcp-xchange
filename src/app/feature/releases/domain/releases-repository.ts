import { Observable } from "rxjs";

export interface ReleasesRepository {
    getReleases(): Observable<any[]>;
}