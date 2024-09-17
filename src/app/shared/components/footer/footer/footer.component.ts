import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {
  rodape = {
    itens:[
      {icone:'https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_whatsapp_telephone_handset_icon_143174.png'},
      {icone:'https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_facebook_icon_143184.png'},
      {icone:'https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_instagram_icon_143177.png'},
      {icone:'https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_viber_telephone_handset_icon_143172.png'}

    ]
  }

  constructor() { }

  ngOnInit() {}

}
