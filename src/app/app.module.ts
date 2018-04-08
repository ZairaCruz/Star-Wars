import { FilmeService } from './servicos/filme.service';
import { PersonagemService } from './servicos/personagem.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { routing } from './app.routing';
import { DetalhesPersonagensComponent } from './detalhes-personagens/detalhes-personagens.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PersonagensComponent,
    DetalhesPersonagensComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [
    PersonagemService,
    FilmeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
