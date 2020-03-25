import { Component, OnInit } from '@angular/core';
import { Hd } from '../models/hd.model';

@Component({
  selector: 'app-hd',
  templateUrl: './hd.component.html',
  styleUrls: ['./hd.component.scss']
})
export class HdComponent implements OnInit {

  hds: Hd[] = [];

  constructor() { }

  ngOnInit(): void {
    this.hds = [

      {
        id: 1,
        urlImagem:'assets/img/hd500.jpg',
        titulo:'HD 500Gb',
        descricaoCurta: 'Hard Disk 500Gb Western Digital',
        descricaoCompleta: '',
        valor: 'R$ 250,00',
      },
      {
        id: 2,
        urlImagem:'assets/img/hd1000.jpg',
        titulo:'HD 1Tb',
        descricaoCurta: 'Hard Disk 1Tb Western Digital',
        descricaoCompleta: '',
        valor: 'R$ 360,00',
      }
    ]
  }

}
