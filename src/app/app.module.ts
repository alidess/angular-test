import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { MypostComponent } from './mypost/mypost.component';
import { PostsComponent } from './posts/posts.component';
import { EditComponent } from './edit/edit.component';
import { NavComponent } from './nav/nav.component';
import { ReversePipe } from './reverse.pipe';
import { AngularFireStorageModule } from '@angular/fire/storage';

var config = {
  apiKey: "AIzaSyDOsd8iOpeHJsY2-kwGmFnAbb_y_nIqwv8",
  authDomain: "alichat-4ed08.firebaseapp.com",
  databaseURL: "https://alichat-4ed08.firebaseio.com",
  projectId: "alichat-4ed08",
  storageBucket: "alichat-4ed08.appspot.com",
  messagingSenderId: "1061732442284"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    AddComponent,
    MypostComponent,
    PostsComponent,
    EditComponent,
    NavComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
