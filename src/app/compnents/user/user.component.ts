import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UpdateUserService } from 'src/app/service/update-user.service';
import { UserService } from 'src/app/service/user.service';
import { UpdateDetailsComponent } from 'src/app/update-details/update-details.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {

  constructor(private updateUserService:UpdateUserService,private userService:UserService) { }

@ViewChild(UpdateDetailsComponent) child : UpdateDetailsComponent;
  //@ViewChild('dochResult') dochResult: DochResultComponent;
 // child: UpdateDetailsComponent;
// https://stackoverflow.com/questions/57878617/pass-data-from-child-to-parent-inside-of-router-outlet
  func: any = null;
  ngOnInit(): void {
    debugger;
this.updateUserService.updateU.subscribe(x=>{
  debugger
   this.userService.upsateStudent(x);
});
  }
  onActivate(componentRef){
    debugger
    this.child = componentRef;
  }
  ngAfterViewInit(): void {
    if(this.child)
       this.func = this.child.onSaveChanges;
  }
}
