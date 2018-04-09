import { PersonagemView } from './../modelos/personagem-view.model';
import { Filme } from './../modelos/filme.model';
import { Personagem } from './../modelos/personagem.model';
import { element } from 'protractor';
import { FilmeService } from './../servicos/filme.service';
import { PersonagemService } from './../servicos/personagem.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html'
})
export class PersonagensComponent implements OnInit {

  public personagens: Personagem[] = [];
  public filmes: Filme[] = [];
  public personagensView: PersonagemView[] = [];
  public iniciar = false;
  public proximaPagina: string;
  public paginaAnterior: string;
  public paginaAtual: any;

  constructor(public personagemService: PersonagemService,
              public filmeService: FilmeService) { }

  ngOnInit() {
    this.personagemService.listar().subscribe((listagem: any) => {
      this.personagens = listagem.results;
      this.proximaPagina = listagem.next;
      this.paginaAnterior = listagem.previous;
      this.paginaAtual = 1;
      this.iniciar = true;

      this.personagens.forEach(item => {
        this.personagensView.push(this.personagemService.getPersonagemFromView(item));
      });
 
    });

  }

  paginacao(irPara: boolean) {
    let pagina = '';
    if(irPara) {
      pagina = this.proximaPagina;
    } else {
      pagina = this.paginaAnterior;
    }
    this.personagemService.paginacao(pagina).subscribe((listagem: any) => {
      this.personagens = listagem.results;
      this.personagens.forEach(item => {
        this.personagensView.push(this.personagemService.getPersonagemFromView(item));
        
      });
      
      this.proximaPagina = listagem.next;
      this.paginaAnterior = listagem.previous;
      this.paginaAtual = pagina.slice(-1);
    });
  }

}
