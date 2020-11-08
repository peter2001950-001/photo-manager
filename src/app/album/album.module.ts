import { NgModule } from '@angular/core';
import { AlbumComponent } from './album/album.component';
import { PhotoComponent } from './photo/photo.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [AlbumComponent, PhotoComponent],
  imports: [
    BrowserModule, 
    CommonModule, 
    RouterModule
  ],
  exports: [AlbumComponent]
})
export class AlbumModule { }
