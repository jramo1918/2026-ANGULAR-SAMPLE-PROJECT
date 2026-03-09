import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  @Input() avatar!: string;
  @Input() name!: string;

  get ImagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser () {
  }

}
