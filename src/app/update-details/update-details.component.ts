import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { StudentComponent } from '../compnents/student/student.component';
import { UpdateUserService } from '../service/update-user.service';
import { UserService } from '../service/user.service';
//import { User } from '../model/user';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  user: User = new User();
  dochSearchForm: FormGroup;
  updateU: string;
  
  constructor(private route: ActivatedRoute, private userService:UserService, private fb: FormBuilder,private updateUserService:UpdateUserService, private student:StudentComponent) {
    this.getUserToUpdate();
   }
  @Output()
  onSaveChanges: EventEmitter<any> = new EventEmitter<any>();
  userToUpdate:User;
  ngOnInit(): void {
   this.updateUserService.updateU.subscribe(res=> this.updateU=res);
  }
  getUserToUpdate() {
    debugger;
    const idUser= this.route.params['value'].user;
    this.userService.getStudentById(idUser).then(user=>{
      debugger;
      this.userToUpdate = user;
    this.InitForm();
    }) ;
  }
  onSubmit() {
    debugger;
    let updatingUser:User; 
    updatingUser=this.dochSearchForm.value;
    this.updateUserService.changeData(updatingUser);
  }
  InitForm(){ 
    debugger;
    this.dochSearchForm = this.fb.group(this.userToUpdate); } 
}