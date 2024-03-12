import { InjectionToken } from "@angular/core";
import { ReleasesHttpRepository } from "./releases-http-repository";
import { ReleasesRepository } from "../domain/releases-repository";

export const RELEASES_SHARED_REPOSITORY = new InjectionToken<ReleasesRepository>('ReleasesRepository', {
    providedIn: 'root',
    factory: () => new ReleasesHttpRepository()
});