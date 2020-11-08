import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserService } from 'src/services/user.service';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './user/user.component'
import { AlbumsService } from 'src/services/albums.service';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumModule } from './album/album.module';
@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserComponent,
    AlbumsListComponent, 
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    RouterModule, 
    AlbumModule
  ],
  providers: [UserService, AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
