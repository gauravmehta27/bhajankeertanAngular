import { PostService } from './../services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactFormComponent } from './contact-form.component';
import { ContactFormRoutingModule } from './contact-form-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    ContactFormRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [
    ContactFormComponent
  ],
  providers: [
    PostService
  ]
})
export class ContactFormModule {
}
