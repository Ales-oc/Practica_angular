import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriptoDetailsComponent } from './criptos/pages/cripto-details/cripto-details.component';
import { CriptosPageComponent } from './criptos/pages/criptos-page/criptos-page.component';
import { LibrePageComponent } from './criptos/pages/libre-page/libre-page.component';

const routes: Routes = [
  {
    path: '',
    component: CriptosPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'libre',
    component: LibrePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'ranking',
    component: CriptosPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'cripto/:id',
    component: CriptoDetailsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
