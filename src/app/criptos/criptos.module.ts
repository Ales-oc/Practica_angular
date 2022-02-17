import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CriptosPageComponent } from './pages/criptos-page/criptos-page.component';
import { CriptoDetailsComponent } from './pages/cripto-details/cripto-details.component';
import { LibrePageComponent } from './pages/libre-page/libre-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { TablaCriptosComponent } from './shared/tabla-criptos/tabla-criptos.component';


@NgModule({
  declarations: [
    CriptosPageComponent,
    CriptoDetailsComponent,
    LibrePageComponent,
    TablaCriptosComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ],
  exports: [
    CriptoDetailsComponent,
    CriptosPageComponent,
    LibrePageComponent
  ]
})
export class CriptosModule { }
