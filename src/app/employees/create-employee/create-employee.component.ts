import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor() { }
  model ={
    fullName:'',
    email:''
  }

  ngOnInit(): void {
  }
  saveEmployee(submitForm:NgForm): void {
    console.log(submitForm.value)
  }

}
