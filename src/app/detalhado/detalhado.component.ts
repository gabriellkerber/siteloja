import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhado',
  templateUrl: './detalhado.component.html',
  styleUrls: ['./detalhado.component.scss']
})
export class DetalhadoComponent implements OnInit {
  img: string;
  valor: string;
  descCurta: string;
  descCompleta: string;
  titulo: String;

  constructor(public appService: AppService, private route:  ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.img = this.appService.dados[id].url;
    this.valor = this.appService.dados[id].valor;
    this.descCurta = this.appService.dados[id].descCurta;
    this.descCompleta= this.appService.dados[id].descCompleta;
    this.titulo = this.appService.dados[id].titulo;
  }

  

}
