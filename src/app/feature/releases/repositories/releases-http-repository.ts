import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, of, tap } from "rxjs";
import { ReleasesRepository } from "../domain/releases-repository";

@Injectable({
  providedIn: 'root'
})
export class ReleasesHttpRepository implements ReleasesRepository {

  private URL = 'https://jira.devsecopsbcp.com/rest/api/2/project/16302';

  private http = inject(HttpClient);

  getReleases(): Observable<any[]> {
    return this.http.get<any[]>(this.URL)
      .pipe(
        tap(heroes => console.log('Releases')),
        catchError(this.handleError('Releases', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error);
      return of(result as T);
    };
  }
}