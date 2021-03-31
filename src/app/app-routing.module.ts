import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//home screen
import { HomeScreenComponent } from './home-screen/home-screen.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeScreenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
