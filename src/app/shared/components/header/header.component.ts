import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  menu ={
    logo:'https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_reddit_robot-256.png',
    itens:[
      { icone:'https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/home-256.png',texto: 'inicio'  },
      { icone:'https://cdn1.iconfinder.com/data/icons/ui-set-6/100/Info-256.png',texto: 'sobre'  },
      { icone:'https://cdn3.iconfinder.com/data/icons/userinterface-1/100/ui-33-256.png',texto: 'galeria'  },
      { icone:'https://cdn1.iconfinder.com/data/icons/handy-vol-9/100/Artboard_19-256.png',texto: 'contato'  }
    ]
  }

  constructor() { }

  ngOnInit() {}

}
