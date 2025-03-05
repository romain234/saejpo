import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PresentationComponent } from './component/presentation/presentation.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { QcmComponent } from './component/qcm/qcm.component';
import { NavComponent } from './component/tableau_de_bord/nav/nav.component';
import { VisiteComponent } from './component/visite/visite.component';




const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'presentation', component: PresentationComponent },
  {path: 'inscription', component: InscriptionComponent},
  {path: 'formulaire', component: QcmComponent},
  {path: 'tableau_de_bord', component: NavComponent},
  {path: 'visite_virtuelle', component: VisiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
