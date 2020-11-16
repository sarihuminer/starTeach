import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList: User[] = [];

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllStudents().then(data => { this.studentList = [...data]; }).catch(err => console.log(err));



  }
  update(user: User, i: number) {
    console.log(user);
    console.log(i);
    this.router.navigate(['user/updateDetails', { user: user.id, index: i }]);
  }

}
