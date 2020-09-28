import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  userId:string;
  name:string;

  constructor(private activeroute: ActivatedRoute) { }

  ngOnInit() {
    //this.userId = this.activeroute.snapshot.paramMap.get("id");
    //this.name = this.activeroute.snapshot.paramMap.get("name");

    this.activeroute.paramMap.subscribe(params => {
      this.userId = params.get("id");
      this.name = params.get("name");
      console.log(this.userId);
    })
    
  }

}
