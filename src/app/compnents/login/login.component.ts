import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { promise } from 'protractor';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('login')
  login: ElementRef;
  user: User = new User();
  constructor(private userSErvice: UserService) { }
  ngAfterViewInit(): void {
    if (this.user.id == undefined)
      this.login.nativeElement.innerText = "ברוכה הבאה הרשמי";
    else
      this.login.nativeElement.innerText = " הכנס"
  }

  ngOnInit(): void {

    console.log(this.user);
  }
  savaUser() {
debugger
    if (this.user.id != null) {

      this.userSErvice.login(this.user).then(res => this.succsesslogin(res)).catch(err => console.log(err));
    }

  }
  succsesslogin(res: User) {
    this.user = res;
    localStorage.setItem("userId", res.id);
    this.login.nativeElement.innerText = "הכנס"
    debugger
    console.log(this.user)
  }

}
