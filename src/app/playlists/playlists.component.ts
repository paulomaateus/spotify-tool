import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { ListItemsComponent } from '../list-items/list-items.component';

@Component({
  selector: 'app-playlists',
  standalone: true,
  imports: [ItemComponent, ListItemsComponent],
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.css'
})
export class PlaylistsComponent {
  playlists = [
    { id: 1, title: 'Playlist 1', properties: { genre: 'Rock', tracks: 20 } },
    { id: 2, title: 'Playlist 2', properties: { genre: 'Pop', tracks: 15 } },
    { id: 3, title: 'Playlist 3', properties: { genre: 'Jazz', tracks: 30 } }
  ];

  deleteItem(id: number) {
    this.playlists = this.playlists.filter(item => item.id !== id);
  }

  accessItem(id: number) {
    console.log(`Accessing playlist with id ${id}`);
    // Lógica de navegação para acessar o item (playlist)
  }
}
