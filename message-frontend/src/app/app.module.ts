import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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

var routes = [{
  path: '',
  component: HomeComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    MessageNewComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
