import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
user:string;
model= {
  inputUser:''
}
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.cast.subscribe(user=>{
      this.user = user;
    })
  }
  changeUser(){
    console.log(this.model.inputUser);
    this.userService.editUser(this.model.inputUser)
  }

}
