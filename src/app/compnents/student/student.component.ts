import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { UpdateUserService } from 'src/app/service/update-user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList: User[] = [];
   updateUser: any;
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router,private updateUserService:UpdateUserService) { }

  ngOnInit(): void {
    debugger
    this.userService.getAllStudents().then(data => { 
      debugger; this.studentList = [...data];
      this.updateUserService.updateU.subscribe(res=>this.updateUser=res);//the parent gave the update objact
     }).catch(err => console.log(err));
     
  }
  update(user: User, i: number) {
    debugger;
    console.log(user);
    console.log(i);
    this.router.navigate(['user/updateDetails', { user: user.id, index: i }]);
  }
}
