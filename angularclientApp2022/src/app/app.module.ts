import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { DeviceListComponent } from './device2/device-list/device-list.component';
import { DeviceRowComponent } from './device2/device-row/device-row.component';
import { DeviceDetailsComponent } from './device2/device-details/device-details.component';
import { DeviceFormComponent } from './device2/device-form/device-form.component';
import { SampleFormComponent } from './device2/sample-form/sample-form.component';
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
    DeviceComponent,
    DeviceListComponent,
    DeviceRowComponent,
    DeviceDetailsComponent,
    DeviceFormComponent,
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
