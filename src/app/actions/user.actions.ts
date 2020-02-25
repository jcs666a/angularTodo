import { Action } from '@ngrx/store';
import { UserModel } from '../models/user.model';

export const USER_LOGIN = '[USER] Login';

export class LogginUser implements Action {
    readonly type = USER_LOGIN;

    constructor(public payload: UserModel) {}
};

export type Actions = LogginUser;
