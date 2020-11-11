import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAllStudents(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  u: User = { codeMosad: 1, firstName: "dasd", id: "23131", lastName: "asdad" };

  users: User[] =
    [{ codeMosad: 1, firstName: "sari", id: "111", lastName: "gutman" },
    { codeMosad: 1, firstName: "sari", id: "222", lastName: "shteren" },
    { codeMosad: 3, firstName: "adi", id: "333", lastName: "revivo" },
    { codeMosad: 1, firstName: "naomi", id: "4444", lastName: "asdad" }
    ];
  constructor() { }
  login(u: User): Promise<User> {
    return Promise.resolve(this.users.find(user => user.id == u.id));

  }
}
