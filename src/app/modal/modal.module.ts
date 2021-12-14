import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';
import { Routes, RouterModule } from '@angular/router';  


import { ModalPage } from './modal.page';


const routes: Routes = [  
  {  
    path: '/home',  
    component: ModalPage  
  }  
];  

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule,
    RouterModule.forChild(routes)  
  ],
  declarations: [ModalPage]
})
export class ModalPageModule {}
