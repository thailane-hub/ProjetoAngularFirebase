import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
})
export class GaleryComponent  implements OnInit {

  rotinas = {
    titulo:'Treinos',
    subtitulos:[
      {texto:'Braco'},
      {texto:'Peito'},
      {texto:'Costas'},
      {texto:'Pernas'}
    ]
  };
  
  treinos =  [ 
    {foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk35k-oKpy-PQ2P0GwrJ__IeWu-OLZzONecA&s' }, 
    {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Triceps-Pulley-Corda.gif' }, 
    {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Peck-Deck.gif' }, 
    {foto:'https://www.blog.treinoemalta.com.br/wp-content/uploads/2023/07/Supino-reto-com-Halteres-1.gif' }, 
    {foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ygTKvE23LGtnkvMgvyJQulDlppq0TPNhTA&s' }, 
    {foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Juh27nt79myVQt3BTIky-CeOEaJx-RsktA&s' }, 
    {foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NftOQkvzBoY_QGQyDO2lgTndjhCrwo2F4g&s' }, 
    {foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2rOtLdlvzES9JkHfGvvxdBKcYfovdVLmVHw&s' }
    
    ]
  


  constructor() { }

  ngOnInit() {}

}
