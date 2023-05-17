import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioURL = 'http://localhost:8080/usuario';

  //Metodos de API REST
  constructor(private httpClient: HttpClient){}

public lista(): Observable<Usuario[]>{

  return this.httpClient.get<Usuario[]>(this.usuarioURL+'lista')

    }

    //Buscar usuario por id
    public detail(id:number): Observable<Usuario[]>{

      return this.httpClient.get<Usuario[]>(this.usuarioURL+`detail/${id}`)

        }

        //Buscar usuario por nombre
        public detailName(nombre:string): Observable<Usuario[]>{

          return this.httpClient.get<Usuario[]>(this.usuarioURL+`detailname/${nombre}`)
            }

            //Registrar usuario
            public register(usuario: Usuario): Observable<any>{
              return this.httpClient.post<any>(this.usuarioURL+'register', usuario);
                }

                public update(id:number, usuario: Usuario): Observable<any>{
                  return this.httpClient.put<any>(this.usuarioURL+`update/${id}`, usuario);
                    }

                    public delete(id:number): Observable<any>{
                      return this.httpClient.delete<any>(this.usuarioURL+`delete/${id}`);
                        }

}
