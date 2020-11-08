import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAlbum } from 'src/app/models/album.model';
import {IPhoto} from 'src/app/models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  albums: IAlbum[];
  photos: IPhoto[];
  loadAlbums(userId: number){
    this.http.get<IAlbum[]>(`https://jsonplaceholder.typicode.com/users/${userId}/albums`).subscribe(albums => {
      this.albums = albums;
    });
  }
  loadPhotos(albumId: number){
    this.http.get<IPhoto[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`).subscribe(photos => {
      this.photos = photos;
    });
  }
  
}
