import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuarioComponent } from './usuario/lista-usuario/lista-usuario.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario.component';
import { RegistroUsuarioComponent } from './usuario/registro-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario.component';

const routes: Routes = [
{path: '', component: ListaUsuarioComponent},
{path: 'detalle/:id', component: DetalleUsuarioComponent},
{path:'registro', component:RegistroUsuarioComponent},
{path:'editar/:id', component:EditarUsuarioComponent},
// Comprueba las Rutas, y si no encuentra ninguna, redirige a la primera (Lista).
{path:'**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
