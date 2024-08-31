import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  paises: any;
  isloading: boolean = false;

  constructor( private router:Router )
  {
    this.getPaisCode();
  }

   getPaisCode(){
    this.isloading = true;
    // feth ele busca url chamada
      fetch('https://restcountries.com/v3.1/all?fields=name,ccn3,flags')

      .then( dados => dados.json())
      // converto em json
      .then(dados => {
        console.log(dados);
        this.paises = dados;
      })
      .catch(erro => {
        console.log(erro);
      })
      // falha de conexao,falha de servidor pra fazer o cath do erro que aconteceu
      .finally( () => {
        console.log('Processo Finalizado');
        this.isloading = false;
      })

      
   }

   verDetalhes(ccn3:string){
    
    this.router.navigate(['/detalhe-pais'], {
      state:{codigo:ccn3 }
    });
   }
}
