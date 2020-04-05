import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cadastro = new FormGroup({
    titulo: new FormControl(null, Validators.required),
    descCurta: new FormControl(null, Validators.required),
    descCompleta: new FormControl(null, Validators.required),
    valor: new FormControl(null, Validators.required),
    url: new FormControl(null, Validators.required),
    tipo: new FormControl(null, Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  enviar(){
    
  }

}
