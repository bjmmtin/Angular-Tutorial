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
  @Input() wish!: WishItem;


  get cssClasses() {
    // return this.fullfilled ? ['strikeout', 'text-muted'] : [];
    return { 'strikeout': this.wish.isComplete, 'text-muted': this.wish.isComplete };
  }
  removeWish(){
    events.emit('removeWish', this.wish);
  }
  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
