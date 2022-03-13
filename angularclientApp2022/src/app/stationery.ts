import { number, string } from "joi"

export interface Stationery {

    _id,
    name:string,
    price:number,
    brandname:string,
    quantity:number,
    person:{name:string,phone:number}
    tags:string[];

}
