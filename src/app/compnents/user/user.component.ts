import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UpdateDetailsComponent } from 'src/app/update-details/update-details.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild(UpdateDetailsComponent)
  child: UpdateDetailsComponent;
  func: any = null;
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.func = this.child.onSaveChanges;
  }

}
