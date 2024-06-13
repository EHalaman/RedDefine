import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ServicingComponent } from './components/servicing/servicing.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'servicing', component: ServicingComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'contact', component: ContactusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
