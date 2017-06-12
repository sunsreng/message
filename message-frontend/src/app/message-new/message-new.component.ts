import { Component, Output, EventEmitter } from '@angular/core';
import { MessagesService } from "app/messages/messages.service";

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css']
})

export class MessageNewComponent {

  @Output() onPosted = new EventEmitter();

  constructor(private messagesService : MessagesService) {}

  message = {
    owner: "",
    text: ""
  }

  post() {
    this.messagesService.postMessage(this.message);
    this.onPosted.emit(this.message);
  }
}
