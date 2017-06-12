import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages = [{text: 'some text', owner: 'Tim'},{text: 'second message', owner: 'John'}];
}
