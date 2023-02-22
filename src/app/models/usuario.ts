import { Direccion } from './direccion';
export class Usuario {

    id?:number;
    nombre:string="";
    apellido:string="";
    cedula:string="";
    direccion:Direccion = new Direccion();

}
