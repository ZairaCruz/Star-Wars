import { DetalhesPersonagensComponent } from './detalhes-personagens/detalhes-personagens.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { PersonagensComponent } from './personagens/personagens.component';

const rotas: Routes = [
    {path: '', component: InicioComponent},
    {path: 'personagens', component: PersonagensComponent},
    {path: 'detalhes/:id', component: DetalhesPersonagensComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(rotas);
