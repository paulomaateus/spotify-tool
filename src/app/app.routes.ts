import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { PlaylistsComponent } from './playlists/playlists.component';

export const routes: Routes = [
    {path: "", component: PlaylistsComponent}
];
