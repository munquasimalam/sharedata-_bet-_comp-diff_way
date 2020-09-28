import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
employees:Employee[]=[
  {
    id: 100,
    name: 'munna',
    gender: 'Male',
    email: 'munna@123gmail.com',
    phoneNumber: 12345678,
    contactPreference: 'true',
    dateOfBirth: new Date('15-08-1999'),
    department: 'it',
    isActive: true,
    photoPath: '/assets/images/mark.png'
  },

  {
    id: 101,
    name: 'Rani',
    gender: 'Male',
    email: 'wasi@123gmail.com',
    phoneNumber: 12345678123,
    contactPreference: 'true',
    dateOfBirth: new Date('15-08-1990'),
    department: 'it',
    isActive: true,
    photoPath: '/assets/images/mary.png'
  },
  {
    id: 103,
    name: 'kumar',
    gender: 'Male',
    email: 'kumar@123gmail.com',
    phoneNumber: 12345678222,
    contactPreference: 'true',
    dateOfBirth: new Date('15-08-1999'),
    department: 'sales',
    isActive: true,
    photoPath: '/assets/images/john.png'
  },
]
userId:string;

  constructor(private router: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = params.get("id");
      console.log(this.userId);
    })
    

  }

  employeeClick(id:string,name:string){
    console.log(id,name);
   this.router.navigate(["/employee",id,name]);
  }

}
