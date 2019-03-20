import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  username: string;
  email: string;
  secret: string;
  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
