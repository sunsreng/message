import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  messages = [{text: 'some text', owner: 'Tim'},{text: 'second message', owner: 'John'}];
}
