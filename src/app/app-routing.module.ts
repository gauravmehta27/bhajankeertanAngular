import { HomeComponent } from './home/home.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact-form', component: ContactFormComponent },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
  
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
