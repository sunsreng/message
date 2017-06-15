import { Component } from '@angular/core';
import { AuthService } from "app/auth.service";
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private auth: AuthService) {}
}
