import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(uname: string, pword: string) {
    if (uname === 'Bidushi' && pword === 'root') {
      return 200;
    } 
    else if (uname === 'Pravesh' && pword === '123') {
      return 200;
    } 
    else
     {
      return 403;
    }
  }

  logout() {
    this.router.navigate(['login']);
  }
}