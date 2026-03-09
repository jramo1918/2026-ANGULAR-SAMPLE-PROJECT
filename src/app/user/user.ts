import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  // avatar = input.required<string>();
  // name = input.required<string>();

  get ImagePath() {
    return 'assets/users/' + this.avatar;
  }

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  onSelectUser () {
  }

}
