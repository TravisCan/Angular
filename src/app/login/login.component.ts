import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
	auth : any = {};
 	constructor(private _authService : AuthService) { }

  	ngOnInit() {
  	}

 	authenticate() {
		this._authService.authenticate(this.auth);
 	}
}
