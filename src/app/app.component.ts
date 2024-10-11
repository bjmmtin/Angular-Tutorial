import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { EventService } from '../shared/services/EventService';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To learn Angular'),
    new WishItem('Get Coffe', true),
    new WishItem('Find Grass that cuts itself', true)
  ];

  constructor(events: EventService) {
    events.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish);
      if (index !== -1) {
        this.items.splice(index, 1);
        console.log('Removed wish:', wish);
      } else {
        console.log('Wish not found:', wish);
      }
    });

  }
  title = 'wishList';

  filter: any;
}
