import { Component, ViewChild } from '@angular/core';
// import { Http } from '@angular/http';
import { MessagesComponent } from './messages/messages.component';
import { MessageNewComponent} from './message-new/message-new.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild(MessagesComponent) messages : MessagesComponent

  onPosted(message) {
    this.messages.messages.push(message);
  }
}
