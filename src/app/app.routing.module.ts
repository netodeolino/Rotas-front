import { AutenticacaoGuard } from './_guards/autenticacao.guard';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
        canActivate: [AutenticacaoGuard]
    },
    {
        path: 'usuario',
        loadChildren: 'app/usuario/usuario.module#UsuarioModule',
        //canActivate: [AutenticacaoGuard]
    },
    {
        path: 'rotas',
        loadChildren: 'app/rotas/rotas.module#RotasModule',
        canActivate: [AutenticacaoGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
