import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AlbumComponent } from './album/album/album.component';
import { HomeComponent } from './home/home.component';
import { UsersResolver } from './users-list/user-list.resolver';

const routes: Routes = [
{
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
},
    {
     path: 'home',
     component: HomeComponent, 
     resolve: {
         userList: UsersResolver
     }
},
{
    path: 'album/:id',
    component: AlbumComponent
}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }