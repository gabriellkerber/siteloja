import { Component, OnInit } from '@angular/core';
import { Tn } from '../models/telanote.model';

@Component({
  selector: 'app-tela-note',
  templateUrl: './tela-note.component.html',
  styleUrls: ['./tela-note.component.scss']
})
export class TelaNoteComponent implements OnInit {

  tns: Tn[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tns = [

      {
        id: 1,
        urlImagem:'assets/img/tela156.jpg',
        titulo:'Tela Notebook 15.6',
        descricaoCurta: 'Tela Led Slim Notebook Acer 15.6',
        descricaoCompleta: '',
        valor: 'R$ 450,00',
      },
      {
        id: 2,
        urlImagem:'assets/img/tela156.jpg',
        titulo:'Tela Notebook 14',
        descricaoCurta: 'Tela Led Slim Notebook Acer 14',
        descricaoCompleta: '',
        valor: 'R$ 430,00',
      }
    ]
  }

}
