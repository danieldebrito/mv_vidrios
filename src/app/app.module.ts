import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContacBoardComponent } from './components/control/contac-board/contac-board.component';
import { MensajeVistaComponent } from './components/control/mensaje-vista/mensaje-vista.component';
import { SideBarComponent } from './components/control/side-bar/side-bar.component';
import { SideBarItemComponent } from './components/control/side-bar-item/side-bar-item.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    ContactoComponent,
    NosotrosComponent,
    TrabajosComponent,
    ServiciosComponent,
    ContacBoardComponent,
    MensajeVistaComponent,
    SideBarComponent,
    SideBarItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
