import { NgFor } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [NgFor, ItemComponent],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {
  @Input() items: any[] = [];
  @Output() onDelete = new EventEmitter<number>();
  @Output() onAccess = new EventEmitter<number>();

  handleDelete(id: number) {
    this.onDelete.emit(id);
  }

  handleAccess(id: number) {
    this.onAccess.emit(id);
  }
}
