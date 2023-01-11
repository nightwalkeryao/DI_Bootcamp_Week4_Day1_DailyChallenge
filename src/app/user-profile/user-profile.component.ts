import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: User = new User("John", "Smith", "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png")

  getFullName(): string {
    return `${this.user.firstName} ${this.user.lastName}`
  }
}
