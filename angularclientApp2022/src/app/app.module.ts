import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationeryComponent } from './stationery/stationery.component';
import { StationeryListComponent } from './shop/stationery-list/stationery-list.component';
import{StationeryRowComponent} from'./shop/stationery-row/stationery-row.component';
import { StationeryDetailsComponent } from './shop/stationery-details/stationery-details.component';
import { StationeryFormComponent } from './shop/stationery-form/stationery-form.component';
import { SampleFormComponent } from './shop/sample-form/sample-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { JwtinterceptorService } from './helper/jwtinterceptor.service';
import { ErrorInterceptor } from './helper/errorinterceptor';









@NgModule({
  declarations: [
    AppComponent,
    StationeryComponent,
    StationeryListComponent,
    StationeryRowComponent,
    StationeryDetailsComponent,
    StationeryFormComponent,
    SampleFormComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:JwtinterceptorService,multi:true},
 { provide: HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
