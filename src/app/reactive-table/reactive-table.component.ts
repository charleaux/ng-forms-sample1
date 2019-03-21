import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  ValidatorFn
} from '@angular/forms';

@Component({
  selector: 'app-reactive-table',
  templateUrl: './reactive-table.component.html',
  styleUrls: ['./reactive-table.component.css']
})
export class ReactiveTableComponent implements OnInit {
  reactiveTable: FormGroup;
  reactiveTable2: FormGroup;

  constructor() {}

  isNumber(fc: FormControl) {
    return fc.value != null && !isNaN(Number(fc.value.toString()))
      ? null
      : { validNumber: { valid: false } };
  }

  ngOnInit() {
    this.reactiveTable = new FormGroup({
      rows: new FormArray([
        new FormGroup({
          name: new FormControl('Charles', Validators.required),
          age: new FormControl(37, [Validators.required, this.isNumber])
        }),
        new FormGroup({
          name: new FormControl('Alberto'),
          age: new FormControl(41)
        })
      ])
    });
  }

  getRows() {
    return (this.reactiveTable.get('rows') as FormArray).controls;
  }

  onSubmit() {
    console.log(this.reactiveTable.value.rows);
  }
}
