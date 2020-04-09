import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,AbstractControl, ValidationErrors } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cadastro = new FormGroup({
    titulo: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
    descCurta: new FormControl(null, [Validators.required, Validators.maxLength(80)]),
    descCompleta: new FormControl(null, Validators.required),
    valor: new FormControl(null, [Validators.required, this.validacaoNum]),
    url: new FormControl(null, Validators.required),
  });


  constructor(public appService: AppService, private router: Router) { }

  ngOnInit(): void {
  }
    enviar(){
      if(this.cadastro.valid){
        this.appService.dados.push(this.cadastro.value);
      this.router.navigateByUrl('Home');
      }
    }

    validacaoNum(control: AbstractControl): ValidationErrors | null {

      const texto = control.value;
  
      if( !isNaN(Number(texto))){
        return null;
      }
      return {validacaoNum: true};
    }

  }
