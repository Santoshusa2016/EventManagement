import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ng-fundamentals';
  constructor(private auth: AuthService){}

  ngOnInit(): void {
    console.log('AppComponent: ngOnInIt')
    this.auth.checkAuthStatus();
  }
}
