import { FormSuccessModule } from './form-success/form-success.module';
import { AboutModule } from './about/about-module';
import { VideoCategoryModule } from './video-category/video-category.module';
import { VideosModule } from './videos/videos.module';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { HomeModule } from './home/home.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AlertModule } from 'ngx-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactFormModule } from './contact-form/contact-form.module';
import { HttpClientModule  } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ContactFormModule,
    HttpModule,
    TabsModule.forRoot(),
    AlertModule.forRoot(),
    BrowserModule,
    CommonModule,
    VideosModule,
    VideoCategoryModule,
    AngularFontAwesomeModule,
    AboutModule,
    FormSuccessModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
