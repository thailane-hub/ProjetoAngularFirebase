import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
perfil = {
  foto: 'https://bcw-media.s3.ap-northeast-1.amazonaws.com/yce_ai_anime_topbanner_mb_01_a51ba67c67.jpg',
  sobre: 'Estudante de Desenvolvimento de Sistema',
  nome:'Amanda Brach',
  profissao:'Programador',
  instagran:'@amandabrach',
  idioma:'Português',
  cidade:'Cerquilho/SP',
  tempo:'Desde Janeiro de 2024',

  metricas:[
      {
        texto:'curtidas',
        valor:'45k'
      },
      {
        texto:'Seguidos',
        valor:'45k'
      },
      {
        texto:'Amigos',
        valor:'45k'
      }
     
  ],

  // formacao: [
  //   // criou um objeto dentro da array
  //   {
  //     ano_inicio: '2023',
  //     ano_termino: '2024',
  //     intituicao: 'Etec Sales Gomes',
  //     curso: 'Desenvolvimento de sistema',
  //   },

  //   {
  //     ano_inicio: '2013',
  //     ano_termino: '2015',
  //     instituicao: 'Faculdade ',
  //     curso: 'Desenvolvimento de sistema',
  //   }

  // ]
}
  constructor(){ }
}
