import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { FooterModule } from '../shared/components/footer/footer/footer.module';
import { GaleriaPageModule } from '../galeria/galeria.module';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer/footer.component';
import { GaleriaPage } from '../galeria/galeria.page';
import { GaleryModule } from '../shared/components/galery/galery.module';
import { BannerModule } from '../shared/components/banner/banner.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    FooterModule,
    GaleriaPageModule,
    GaleryModule,
    BannerModule
  ],
  declarations: [HomePage],

  exports:[
    HeaderComponent,
    FooterComponent,
    GaleriaPage
  ]

})
export class HomePageModule {}
