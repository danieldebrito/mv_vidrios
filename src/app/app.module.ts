import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { SideBarItemComponent } from './components/control/side-bar-item/side-bar-item.component';
import { LoginComponent } from './components/control/login/login.component';
import { ErrorLoginComponent } from './components/control/error-login/error-login.component';
import { GraciasComponent } from './components/control/gracias/gracias.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
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
    SideBarItemComponent,
    LoginComponent,
    ErrorLoginComponent,
    GraciasComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
