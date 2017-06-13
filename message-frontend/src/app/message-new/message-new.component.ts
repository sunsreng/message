import { Component } from '@angular/core';
import { MessagesService } from "app/messages/messages.service";

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css']
})

export class MessageNewComponent {
  constructor(private messagesService : MessagesService) {}

  message = {
    owner: "",
    text: ""
  }

  post() {
    this.messagesService.postMessage(this.message);
  }
}
