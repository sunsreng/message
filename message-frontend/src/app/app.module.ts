import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule, MdSnackBarModule } from '@angular/material';
import { MessagesService } from "app/messages/messages.service";
import { AppComponent } from './app.component';
import { MessagesComponent } from "app/messages/messages.component";
import { MessageNewComponent } from './message-new/message-new.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from "app/auth.service";

var routes = [
  { path: '', component: HomeComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'messages/:name', component: MessagesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'auth', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    MessageNewComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdSnackBarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MessagesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
