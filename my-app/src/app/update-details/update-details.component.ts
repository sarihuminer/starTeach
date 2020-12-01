import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, EventEmitter, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private route: ActivatedRoute, private userService: UserService, private fb: FormBuilder, private updateUserService: UpdateUserService
  ) {
    this.getUserToUpdate();
  }
  @Output()
  onSaveChanges: EventEmitter<any> = new EventEmitter<any>();
  userToUpdate: User;
  ngOnInit(): void {
    //$
    this.dochSearchForm = this.fb.group(this.userToUpdate);//create a object of the row you want to update.
    this.dochSearchForm.get('id').setValidators([Validators.required,Validators.pattern(/^\d{9,9}?$/)]);
    this.dochSearchForm.get('id').updateValueAndValidity();
    this.dochSearchForm.get('firstName').setValidators([Validators.required,Validators.pattern(/^\u0590-\u05FF/)]);
    this.dochSearchForm.get('firstName').updateValueAndValidity();
    this.dochSearchForm.get('lastName').setValidators([Validators.required,Validators.pattern(/^\u0590-\u05FF/)]);
    this.dochSearchForm.get('lastName').updateValueAndValidity();
    this.dochSearchForm.get('codeMosad').setValidators([Validators.required,Validators.pattern(/^\d/)]);
    this.dochSearchForm.get('codeMosad').updateValueAndValidity();
    this.dochSearchForm.get('phone').setValidators([Validators.pattern(/^\d{7,10}?$/)]);
    this.dochSearchForm.get('phone').updateValueAndValidity();
    this.dochSearchForm.get('email').setValidators([ Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]);
    this.dochSearchForm.get('email').updateValueAndValidity();
    this.dochSearchForm.get('password').setValidators([Validators.required]);
    this.dochSearchForm.get('password').updateValueAndValidity();
    this.InitForm();
  }
  getUserToUpdate() {
    const idUser = this.route.params['value'].user;
    this.userService.getStudentById(idUser).then(user => {
      this.userToUpdate = user;
      this.InitForm();
    });
  }
  onSubmit() {
    debugger
    if (this.validateForm()) {
      let updatingUser: User;
      updatingUser = this.dochSearchForm.value;
      this.updateUserService.changeData(updatingUser);//move the update object to the update-user-service
    }
  }
  InitForm() {
    this.updateUserService.updateU.subscribe(res => this.userToUpdate);
  }
  // ‏
  validateForm() {
    debugger
    Object.keys(this.dochSearchForm.controls).forEach(field => {
      debugger
      const control = this.dochSearchForm.get(field);
      control.markAsDirty({ onlySelf: true });
    });
    return this.dochSearchForm.status === 'VALID';
  }
}