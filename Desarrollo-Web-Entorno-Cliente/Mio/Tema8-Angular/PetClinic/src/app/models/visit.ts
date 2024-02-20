import { Pet } from "./pet";

export interface Visit {
    id: number;
    pet: Pet;
    visitDate: Date;
    description: string;
}