import { Component } from '@angular/core';
import { MessagesService } from "app/messages/messages.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  constructor(private messagesService: MessagesService) {}

  async ngOnInit() {
    var response = await this.messagesService.getMessages();
    this.messages = response.json();
  }

  messages = [];
}
