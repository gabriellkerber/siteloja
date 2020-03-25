import { Component, OnInit } from '@angular/core';
import { Tc } from '../models/telacel.model';

@Component({
  selector: 'app-tel-cel',
  templateUrl: './tel-cel.component.html',
  styleUrls: ['./tel-cel.component.scss']
})
export class TelCelComponent implements OnInit {

  tcs: Tc [] = [];

  constructor() { }

  ngOnInit(): void {

    this.tcs = [

      {
        id: 1,
        urlImagem:'assets/img/tcs7.jpg',
        titulo:'Frontal S7 Edge',
        descricaoCurta: 'Frontal de Smartphone Galaxy S7 Edge Original',
        descricaoCompleta: '',
        valor: 'R$ 700,00',
      },
      {
        id: 2,
        urlImagem:'assets/img/tcs9.jpg',
        titulo:'Frontal S9',
        descricaoCurta: 'Frontal de Smartphone Galaxy S9 Original',
        descricaoCompleta: '',
        valor: 'R$ 1300,00',
      }
    ]
  }

}
