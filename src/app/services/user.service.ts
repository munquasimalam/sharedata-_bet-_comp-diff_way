import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject<string>('munna');
  // broad cast the user
cast = this.user.asObservable(); 

editUser(newUser){
  this.user.next(newUser);
}
}
