import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { WebAppModule } from '../web-app/web-app.module';




@NgModule({
  declarations: [
    SidemenuComponent
  ],
  imports: [
    CommonModule,


  ],
  exports: [
    SidemenuComponent
  ]
})
export class SharedModule { }
