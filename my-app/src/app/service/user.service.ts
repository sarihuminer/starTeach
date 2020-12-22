import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  upsateStudent(updateUser: any) {
    debugger;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id ==updateUser.id) {
        this.users[i].firstName =updateUser.firstName;
        this.users[i].lastName = updateUser.lastName;
        this.users[i].codeMosad =updateUser.codeMosad;
        this.users[i].password = updateUser.password;
        this.users[i].phone = updateUser.phone;
        this.users[i].email = updateUser.email;
        alert(this.users[i].firstName + ' ' +  this.users[i].lastName + ' ' + this.users[i].codeMosad + ' ' +  this.users[i].password + ' ' +  this.users[i].phone + ' ' +  this.users[i].email);
        return;
      }
    }
  }
  getAllStudents(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  getStudentById(idUser: number): Promise<User> {
    debugger
    const userObject = this.users.find(u => u.id == idUser.toString());
    return Promise.resolve(userObject);
  }
  u: User = { codeMosad: 1, firstName: "dasd", id: "23131", lastName: "asdad", phone: "1234", email: "sarig2072@gmail.com", password: "12345"  };

  users: User[] =
    [{ codeMosad: 1, firstName: "שרי", id: "111111111", lastName: "גוטמן", phone: "1234333333", email: "sarig2072@gmail.com", password: "12345" },
    { codeMosad: 1, firstName: "שרי", id: "222222222", lastName: "שטרן", phone: "5678333333", email: "2071@gmail.com", password: "12346" },
    { codeMosad: 3, firstName: "עדי", id: "333333333", lastName: "רביבו", phone: "9101112333", email: "2073@gmail.com", password: "12347" },
    { codeMosad: 1, firstName: "נעמי", id: "444444444", lastName: "אסדד", phone: "1314151633", email: "2074@gmail.com", password: "12348" }
    ];
  constructor() { }
  login(u: User): Promise<User> {
    debugger
    return Promise.resolve(this.users.find(user => user.id == u.id));

  }
}
