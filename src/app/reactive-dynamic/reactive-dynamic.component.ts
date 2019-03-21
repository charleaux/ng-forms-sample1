import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-dynamic',
  templateUrl: './reactive-dynamic.component.html',
  styleUrls: ['./reactive-dynamic.component.css']
})
export class ReactiveDynamicComponent implements OnInit {
  dynamicForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.dynamicForm = new FormGroup({
      name: new FormControl(undefined, Validators.required),
      hobbies: new FormArray([])
    });
  }

  addHobby() {
    console.log('Adding hobby');
    (this.dynamicForm.get('hobbies') as FormArray).push(
      new FormControl(undefined, Validators.required)
    );
  }
  getHobbies() {
    return (this.dynamicForm.get('hobbies') as FormArray).controls;
  }

  onSubmit() {
    console.log(this.dynamicForm);
  }
}
