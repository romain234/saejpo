import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { PresentationComponent } from './component/presentation/presentation.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { QcmComponent } from './component/qcm/qcm.component';
import { ListeComponent } from './component/tableau_de_bord/liste/liste.component';
import { StatsComponent } from './component/tableau_de_bord/stats/stats.component';
import { NavComponent } from './component/tableau_de_bord/nav/nav.component';
import { ProjetsComponent } from './component/tableau_de_bord/projets/projets.component';
import { ReponsesComponent } from './component/tableau_de_bord/reponses/reponses.component';
import { SliderComponent } from './component/slider/slider.component';
import { VisiteComponent } from './component/visite/visite.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PresentationComponent,
    InscriptionComponent,
    QcmComponent,
    ListeComponent,
    StatsComponent,
    NavComponent,
    ProjetsComponent,
    ReponsesComponent,
    SliderComponent,
    VisiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
