import { Type } from "./type";
import { Owner } from "./owner";
import { Visit } from "./visit";

export interface Pet {

    id: number;
    name: string;
    birthDate: Date;
    typeName: Type;
    owner: Owner;
    visits: Visit[];
}