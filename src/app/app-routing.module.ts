import { FormSuccessComponent } from './form-success/form-success.component';
import { AboutComponent } from './about/about.component';
import { VideoCategoryComponent } from './video-category/video-category.component';
import { VideosComponent } from './videos/videos.component';
import { HomeComponent } from './home/home.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'success', component: FormSuccessComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'videos/:id', component: VideoCategoryComponent },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' }
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
