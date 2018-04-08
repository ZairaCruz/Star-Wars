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
        if (item.films.length > 0) {
          for (let index = 0; index < item.films.length; index++) {
            const element = item.films[index];
            this.filmeService.porPersonagem(element).subscribe((filme: any) => {
              this.filmes.push(filme);
            });
          }
        }
        console.log(item.films);
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
      this.personagens.push(listagem.results);
      listagem.results.forEach(item => {
        this.personagens.push(item);
        
        console.log(this.personagens);
      });
      this.proximaPagina = listagem.next;
      this.paginaAnterior = listagem.previous;
      this.paginaAtual = pagina.slice(-1);
    });
  }

}
