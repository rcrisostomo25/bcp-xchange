import { inject } from "@angular/core";
import { RELEASES_SHARED_REPOSITORY } from "../repositories/http-repository";
import { Observable } from "rxjs";

export class ReleasesController {

    private readonly releasesRepository = inject(RELEASES_SHARED_REPOSITORY);

    getReleases(): Observable<any> {
        return this.releasesRepository.getReleases();
    }
}