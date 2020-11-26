import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {
  private update = new BehaviorSubject('update data');
  updateU = this.update.asObservable();

  changeData(updateUser: any) {
    this.update.next(updateUser);
  }
  constructor() { }
}
