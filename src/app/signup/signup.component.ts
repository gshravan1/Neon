import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    angForm: FormGroup;

constructor(private fb: FormBuilder) {
    this.createForm();
 }

ngOnInit() {
}
createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       email: ['', Validators.required ],
       password: ['', Validators.required ],
       password1: ['', Validators.required ],
       date: ['', Validators.required ],
       phone: ['', Validators.required ]
    });
  }

}
