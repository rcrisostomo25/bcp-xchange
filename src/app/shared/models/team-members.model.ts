import { Timestamp } from "firebase/firestore";

export interface ITeamMembers {
    sexo: string;
    nombre: string;
    rol: string;
    perfil: string;
    cumpleanios: Timestamp;
    orden: Number;
}