import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { states } from '../data-model';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { PostService } from './post.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  constructor(private fb: FormBuilder, private service: PostService) {
  }

  public form= this.fb.group({
    email: ['', Validators.required ],
    phone: ['', Validators.required ],
    concern: ['', Validators.required ]
  });

  createPost(event) {
    let post = this.form.value;

    this.service.create(post)
      .subscribe(
        Response => {
          if(Response.status===200) {
            console.log("success");
          }
         
          console.log(Response);
        },
        (error: AppError) => {
          console.log(error);

          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          }
          else throw error;
        });
  }

  // submit(event) {
  //   console.log(this.form.value);
  //   this.http.post('http://localhost/bhajankeertan/api/enquiry/create.php', this.form.value)
  //     .subscribe(Response => {
  //       console.log(Response);
  //     })
  // }
}
