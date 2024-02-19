import { Type } from "./type";
import { Owner } from "./owner";
import { Visit } from "./visit";

export interface Pet {

    id: number;
    name: string;
    birth_date: Date;
    type: Type;
    owner: Owner;
    visits: Visit [];
}