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
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';



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
    BrowserAnimationsModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#0B3B17', 
      secondaryColour: '#0B3B17', 
      tertiaryColour: '#0B3B17'
  })
  ],
  providers: [
    PersonagemService,
    FilmeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
