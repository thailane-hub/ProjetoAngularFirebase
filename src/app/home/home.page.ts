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
    nome:'Amanda Brach',
    profissao:'Programador',
    instagran:'@amandabrach',
    idioma:'Português',
    cidade:'Cerquilho/SP',
    tempo:'Desde Janeiro de 2024',

  }
  biogragrafia={
    sobre:'Estudante de desenvolvimento de sistema'
  }

   social={
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
    amigos:[
      {
        foto:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcStGjbNuH4FYfPJ9Jox3QooUPRTSzSVvumAhKCY9rUTwXdMdtY0://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk-1024x1024.jpg',
        nome:'Mariah Carey',
        perfil:'@Mariah ',
        post:'ama cantar'
      },
      {
        foto:'hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGnVeuFVRc_PdTRPGO-TP5qYyLrcBrP1TkrPNAK8ImHUtljJx9LzWwnh4v1aQUouQqGFk&usqp=CAUttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStaXrMrjkjbUISIck4kGjlm02rnXgxpHlq3sFS9xCqIzuyPppe3SHxA7sFfvqQyHmorHGxVu6bgwB7rnHGgk-leOfGiTPcLY8Yc1qzoQ',
        nome:'Mariah Carey',
        perfil:'@Mariah',
        post:'ama cantar'
      }
    ]
} 


    constructor(){ }

  }
