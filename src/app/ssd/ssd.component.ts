import { Component, OnInit } from '@angular/core';
import { Ssd } from '../models/ssd.model';

@Component({
  selector: 'app-ssd',
  templateUrl: './ssd.component.html',
  styleUrls: ['./ssd.component.scss']
})
export class SsdComponent implements OnInit {

  ssds: Ssd[] = [];
  descricao = "";

  constructor() { }

  ngOnInit(): void {

    this.ssds = [

      {
        id: 1,
        urlImagem:'assets/img/ssdKing.jpg',
        titulo:'SSD 120gb',
        descricaoCurta: 'Solid State Drive 120Gb Kingston',
        descricaoCompleta: '',
        valor: 'R$ 300,00',
      },
      {
        id: 2,
        urlImagem:'assets/img/ssdKing.jpg',
        titulo:'SSD 240gb',
        descricaoCurta: 'Solid State Drive 240Gb Kingston',
        descricaoCompleta: '',
        valor: 'R$ 380,00',
      },
      {
        id: 3,
        urlImagem:'assets/img/ssdSan.jpg',
        titulo:'SSD 240gb',
        descricaoCurta: 'Solid State Drive 240Gb Sandisk',
        descricaoCompleta: '',
        valor: 'R$ 360,00',
      }
    ]
  }
  

}
