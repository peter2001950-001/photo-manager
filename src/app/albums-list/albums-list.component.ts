import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlbumsService } from 'src/services/albums.service';
import { UserService } from 'src/services/user.service';
import { IAlbum } from '../models/album.model';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

  constructor(private albumService: AlbumsService, private userService: UserService ) { }
  private subscription: Subscription;
  get albums(){
      return this.albumService.albums;
   }
   userId: number
  ngOnInit(): void {
    this.subscription = this.userService.selectedUser
    .subscribe(
      (user: IUser) => {
        this.userId = user.id;
        this.albumService.loadAlbums(this.userId);
      }
    )
  }
}
