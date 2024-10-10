import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import events from '../../shared/services/EventService';
@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wishText!: string;
  @Input() fullfilled!: boolean;
  @Output() fullfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    // return this.fullfilled ? ['strikeout', 'text-muted'] : [];
    return { 'strikeout': this.fullfilled, 'text-muted': this.fullfilled };
  }
  removeWish(){
    events.emit('removeWish', this.wishText);
  }
  toggleFullfilled() {
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }
}
