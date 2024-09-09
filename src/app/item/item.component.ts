import { NgFor, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item: any;
  @Output() onDelete = new EventEmitter<number>();
  @Output() onAccess = new EventEmitter<number>();

  expanded = false;

  expand() {
    this.expanded = !this.expanded;
  }

  access() {
    this.onAccess.emit(this.item.id);
  }

  delete() {
    this.onDelete.emit(this.item.id);
  }
}
