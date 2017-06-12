import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MessagesService {
    BASE_URL = 'http://localhost:5000/api/messages';
    constructor(private http: Http) { }
    getMessages() {
        return this.http.get(this.BASE_URL).toPromise();
    }
    postMessage(message) {
        return this.http.post(this.BASE_URL, message).toPromise();
    }
}