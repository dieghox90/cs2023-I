import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './usuarios/form/form.component';
import { ListaComponent } from './usuarios/lista/lista.component';

const routes: Routes = [
  {path:"form-usuario",component:FormComponent},
  {path:"listar-usuarios",component:ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
