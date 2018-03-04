import { NgModule } from '@angular/core';
import { ContactFormComponent } from './contact-form.component';
import { ContactFormRoutingModule } from './contact-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostService } from './post.service';

@NgModule({
  imports: [
    ContactFormRoutingModule,
    ReactiveFormsModule,
    CommonModule
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
