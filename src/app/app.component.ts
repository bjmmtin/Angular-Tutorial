import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
]

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

  listFilter: any = '0';

  newWishtext = "";
  
  title = 'wishList';

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.listFilter])
  };

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }

  addNewWish() {
    //todo: add wish to items array
    this.items.push(new WishItem(this.newWishtext));
    this.newWishtext = '';
  }
}
