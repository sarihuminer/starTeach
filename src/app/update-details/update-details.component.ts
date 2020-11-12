import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  user: User = new User();
  constructor(private route: ActivatedRoute) { }

  @Output()
  onSaveChanges: EventEmitter<User> = new EventEmitter<User>();

  ngOnInit(): void {
    console.log(this.route.params['value'].user);
  }
  onSubmit() {
    this.onSaveChanges.emit(this.user);
  }
}
