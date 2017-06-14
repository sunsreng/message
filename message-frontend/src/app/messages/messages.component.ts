import { Component } from '@angular/core';
import { MessagesService } from "app/messages/messages.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  constructor(private messagesService: MessagesService, private route: ActivatedRoute) {}

  ngOnInit() {
    var user = this.route.snapshot.params.name;
    this.messagesService.getMessages(user);
  }
}
