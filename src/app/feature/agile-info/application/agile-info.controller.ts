import { inject } from "@angular/core";
import { FIRESTORE_SHARED_REPOSITORY } from "../../../shared/repositories/http-repository";
import { Observable } from "rxjs";
import { IAgileInfo } from "../../../shared/models/agile-info.model";

export class AgileInfoController {

    private readonly firestoreRepository = inject(FIRESTORE_SHARED_REPOSITORY);

    getAgileInfo(): Observable<IAgileInfo[]> {
        return this.firestoreRepository.getAgileInfoCollection('agile-info');
    }

}