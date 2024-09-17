import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { IonicModule } from '@ionic/angular';
import { FooterModule } from '../footer/footer/footer.module';
import { GaleriaPageModule } from 'src/app/galeria/galeria.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FooterModule,
    GaleriaPageModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
