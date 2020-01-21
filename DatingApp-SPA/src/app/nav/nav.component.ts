import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authservice.login(this.model).subscribe(next => {
      console.log('logged correctly');
    }, error => {
      console.log('failed to login');
    });
  }

  loggedin(){
    const token = localStorage.getItem('token');
    //short hand for an if
    return !!token;
  }

  logout(){
    localStorage.removeItem('token');
    console.log('logged out');
  }
}
