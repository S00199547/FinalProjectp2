import { number, string } from "joi"

export interface Device {

    _id,
    name:string,
    price:number,
    companyname:string,
    person:{name:string,phone:number}
    tags:string[];

}
