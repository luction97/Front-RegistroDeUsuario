export class Usuario {

    id?: number;
    nombre: string = '';
    apellido:string = '';
    email:string = '';
    contrasenia: string = '';

constructor(nombre:string, apellido:string, email:string, contrasenia:string){
this.nombre = nombre;
this.apellido = apellido;
this.email = email;
this.contrasenia = contrasenia;
}

}


