import { Component, Output, EventEmitter, } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();

  newWishtext = "";

  addNewWish() {
    //todo: add wish to items array
    // this.items.push(new WishItem(this.newWishtext));
    this.addWish.emit(new WishItem(this.newWishtext))
    this.newWishtext = '';
  }
}
