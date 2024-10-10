import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('TO learn Angular'),
    new WishItem('Get Coffe', true),
    new WishItem('Find Grass that cuts itself', true)
  ];
  newWishtext = "";
  title = 'wishList';

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }

  addNewWish() {
    //todo: add wish to items array
    this.items.push(new WishItem(this.newWishtext));
    this.newWishtext = '';
  }
}
