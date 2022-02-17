import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SidebarComponent } from './sidebar/sidebar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';




@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PrimeNgModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
