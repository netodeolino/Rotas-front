import { AutenticacaoGuard } from './../_guards/autenticacao.guard';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { LoginComponent } from './login/login.component';

const usuariosRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'novo', component: NovoUsuarioComponent },
];

@NgModule({
    imports: [RouterModule.forChild(usuariosRoutes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule {

}
