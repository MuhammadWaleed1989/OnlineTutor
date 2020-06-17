import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '../../../../app/core/models/auth.models';
import { UserService } from '../../../../app/services/user.service';
import { AuthenticationService } from '../../../core/services/auth.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})

/**
 * Contacts user-list component
 */
export class UserlistComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    // this.currentUserSubscription = this.authenticationService.currentUserValue.subscribe(user => {
    //   this.currentUser = user;
    // });
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Contacts' }, { label: 'User List', active: true }];
    this.loadAllUsers();
  }
  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }
}
