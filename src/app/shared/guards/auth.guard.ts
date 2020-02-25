import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { UserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userInfo: Observable<UserModel[]>;
  isLogged: boolean = false;

  constructor(private store: Store<AppState>) {
    this.userInfo = store.select('user');
    this.userInfo.subscribe(result => {
      this.isLogged = result[0].isLogged;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.isLogged;
  }
}
