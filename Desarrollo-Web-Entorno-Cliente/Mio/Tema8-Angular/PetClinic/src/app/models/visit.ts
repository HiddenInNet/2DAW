import { Pet } from "./pet";

export interface Visit {
    id: number;
    pet: Pet;
    visit_date: Date;
    description: string;
}