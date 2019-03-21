import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @ViewChild('form') signupForm: NgForm;
  @ViewChild('email') signupFormEmail: NgModel;
  defaultQuestion = 'teacher';
  genders = ['male', 'female'];
  answer: string;
  submitted: boolean;

  user = {
    username: '',
    email: '',
    secret: '',
    questionAnswer: '',
    gender: ''
  };

  constructor() {}

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.setValue({
      userData: { username: suggestedName, email: 'superuser@mail.com' },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    });
  }

  suggestUserNameViaPatch() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({ userData: { username: suggestedName } });
  }

  ngOnInit() {}

  toggleDefaultQuestion() {
    this.defaultQuestion === 'teacher'
      ? (this.defaultQuestion = 'pet')
      : (this.defaultQuestion = 'teacher');
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.user.username = form.value.userData.username;
    this.user.email = form.value.userData.email;
    this.user.secret = form.value.secret;
    this.user.questionAnswer = form.value.questionAnswer;
    this.user.gender = form.value.gender;
    form.reset();
  }
}
