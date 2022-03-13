import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StationeryListComponent } from './shop/stationery-list/stationery-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'stationeries',component:StationeryListComponent},
  {path:'users',component:UserListComponent},{path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'users', component: UserListComponent,  canActivate: [AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{relativeLinkResolution:'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
