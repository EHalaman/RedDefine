import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicingComponent } from './components/servicing/servicing.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    FooterComponent,
    ServicingComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
