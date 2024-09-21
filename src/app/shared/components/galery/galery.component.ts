import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
})
export class GaleryComponent  implements OnInit {

 
  treinos =  [ 
    
    {
      nome:'Braço',
      fotos:[
        {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Rosca-Alternada-com-Halteres.gif' }, 
        {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Triceps-Pulley-Corda.gif' }, 
      ]
    },
    {
      nome:'Peito',
      fotos:[
        {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Peck-Deck.gif' }, 
        {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Supino-reto-com-Halteres-1.gif' }, 
      ]    
    },

    { nome:'Costas',
      fotos:[
        {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Remada-Curvada-com-Barra-Pronada.gif' }, 
        {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Puxada-Alta-Aberta.gif' }, 
      ]
    },

    { nome:'Pernas',
      fotos:[
        {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Mesa-Flexora.gif' }, 
        {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Elevacao-Pelvica.gif' }, 
      ]

    },   
    
    ]
  


  constructor() { }

  ngOnInit() {}

}
