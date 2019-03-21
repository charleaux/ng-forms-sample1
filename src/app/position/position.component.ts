import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  answer: string;

  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(undefined, Validators.required),
        email: new FormControl('torry@email.com', [
          Validators.required,
          Validators.email
        ])
      }),

      secret: new FormControl('teacher'),
      questionAnswer: new FormControl('the lady who was my teacher'),
      gender: new FormControl('male')
    });
  }
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.patchValue({ userData: { username: suggestedName } });
  }
  toggleDefaultQuestion() {
    this.signupForm.controls.secret.value === 'pet'
      ? this.signupForm.patchValue({ secret: 'teacher' })
      : this.signupForm.patchValue({ secret: 'pet' });
  }

  onSubmit() {
    console.log(this.signupForm.controls);
  }
}
