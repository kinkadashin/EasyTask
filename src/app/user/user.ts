import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type UserProps } from './user.model';
import { Card } from '../shared/card/card';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.scss',
  imports: [Card],
})
export class User {
  @Input({ required: true }) user!: UserProps;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
