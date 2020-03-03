import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { UserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userInfo: Observable<UserModel[]>;
  isLogged: boolean = false;

  constructor(private store: Store<AppState>, private router: Router) {
    this.userInfo = store.select('user');
    this.userInfo.subscribe(result => {
      this.isLogged = result[0].isLogged;
    });
  }

  canActivate(): boolean {
    if(!this.isLogged) {
      this.router.navigate(['/']);
    }
    return this.isLogged;
  }
}
