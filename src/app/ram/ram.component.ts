import { Component, OnInit } from '@angular/core';
import { Ram } from '../models/ram.model';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.scss']
})
export class RamComponent implements OnInit {
  rams: Ram [] = [];

  constructor() { }

  ngOnInit(): void {
    this.rams = [

      {
        id: 1,
        urlImagem:'assets/img/ram8gb.jpg',
        titulo:'Memória Ram 4Gb',
        descricaoCurta: 'Memória Ram 4Gb DDR4 HyperX',
        descricaoCompleta: '',
        valor: 'R$ 320,00',
      },
      {
        id: 2,
        urlImagem:'assets/img/ram8gb.jpg',
        titulo:'Memória Ram 8Gb',
        descricaoCurta: 'Memória Ram 8Gb DDR4 HyperX',
        descricaoCompleta: '',
        valor: 'R$ 450,00',
      }
    ]
  }

}
