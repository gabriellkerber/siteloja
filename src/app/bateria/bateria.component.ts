import { Component, OnInit } from '@angular/core';
import { Bateria } from '../models/bateria.model';

@Component({
  selector: 'app-bateria',
  templateUrl: './bateria.component.html',
  styleUrls: ['./bateria.component.scss']
})
export class BateriaComponent implements OnInit {

  baterias: Bateria[] = [];

  constructor() { }

  ngOnInit(): void {

    this.baterias = [

      {
        id: 1,
        urlImagem:'assets/img/batg4.jpg',
        titulo:'Bateria Moto G4 Plus',
        descricaoCurta: 'Bateria Smartphone Motorola G4 Plus',
        descricaoCompleta: '',
        valor: 'R$ 65,00',
      },
      {
        id: 2,
        urlImagem:'assets/img/batz2.jpg',
        titulo:'Bateria Moto Z2 Play',
        descricaoCurta: 'Bateria Smartphone Motorola Z2 Play',
        descricaoCompleta: '',
        valor: 'R$ 90,00',
      }
    ]
  }

}
