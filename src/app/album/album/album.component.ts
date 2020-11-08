import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPhoto } from 'src/app/models/photo.model';
import { AlbumsService } from 'src/services/albums.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  get photos(): IPhoto[]{
    return this.albumService.photos;
  }
  subscription: Subscription;
  constructor(private albumService: AlbumsService, activateRoute: ActivatedRoute) {
      this.subscription =  activateRoute.params.subscribe((params: Params)=> {
          albumService.loadPhotos(params['id'])
      }
      ); 
  }
  
  ngOnInit(): void {
  }
  
}
