import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {SelectButtonModule} from 'primeng/selectbutton';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {ProgressBarModule} from 'primeng/progressbar';
import {ChipsModule} from 'primeng/chips';
import {BadgeModule} from 'primeng/badge';
import {ListboxModule} from 'primeng/listbox';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    ButtonModule,
    SelectButtonModule,
    SidebarModule,
    BrowserAnimationsModule,
    TableModule,
    CardModule,
    ProgressBarModule,
    ChipsModule,
    BadgeModule,
    ListboxModule
  ]
})
export class PrimeNgModule { }
