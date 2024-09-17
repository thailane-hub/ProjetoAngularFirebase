import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaPageRoutingModule } from './galeria-routing.module';

import { GaleriaPage } from './galeria.page';
import { HomePageModule } from '../home/home.module';
import { FooterModule } from '../shared/components/footer/footer/footer.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,


  ],
  declarations: [GaleriaPage],
  exports:[
    GaleriaPage
  ]
})
export class GaleriaPageModule {}
