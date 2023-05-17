import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//External
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListaUsuarioComponent } from './usuario/lista-usuario/lista-usuario.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario.component';
import { RegistroUsuarioComponent } from './usuario/registro-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario.component';

import{HttpClientModule} from '@angular/common/http'; // Para consumir API REST
import{FormsModule} from '@angular/forms'; // Para creación de formulario
@NgModule({
  declarations: [
    AppComponent,
    ListaUsuarioComponent,
    DetalleUsuarioComponent,
    RegistroUsuarioComponent,
    EditarUsuarioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
