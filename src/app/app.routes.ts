import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import path from 'node:path';
import { LoginComponent } from './login/login.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';

export const routes: Routes = [{path: '', redirectTo: '/login', pathMatch: 'full'}, 
                                {path: 'login', component: LoginComponent},
                                {path: 'cadastro', component: CadastroProdutoComponent}];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}