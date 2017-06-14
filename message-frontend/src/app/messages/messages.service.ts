import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class MessagesService {
    BASE_URL = 'http://localhost:5000/api/messages';

    messages = [];

    constructor(private http: Http, private sb: MdSnackBar) {
        // this.getMessages();
    }

    async getMessages(user) {
        try {
           user = (user) ? '/' + user : '';
            var response = await this.http.get(this.BASE_URL + user).toPromise();
            this.messages = response.json();  
        } catch (error) {
            this.handleError("Unable to get messages.");
        }
    }
    async postMessage(message) {
        try {
            var response = await this.http.post(this.BASE_URL, message).toPromise();
            this.messages.push(response.json());
        } catch (error) {
            this.handleError("Unable to post messages");
        }
    }

    private handleError(error) {
        console.error(error);
        this.sb.open(error, 'close', {duration: 2000});
    }
}