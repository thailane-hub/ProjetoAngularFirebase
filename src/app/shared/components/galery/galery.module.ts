import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleryComponent } from './galery.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    GaleryComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    GaleryComponent
  ]
})
export class GaleryModule { }
