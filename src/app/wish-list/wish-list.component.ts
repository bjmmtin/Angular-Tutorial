import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';
@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [
    CommonModule,
    WishListItemComponent,
  ],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  @Input() wishes : WishItem[] = [];

}
