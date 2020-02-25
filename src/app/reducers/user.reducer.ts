import { UserModel } from '../models/user.model';
import * as UserActions from '../actions/user.actions';

export function userReducer(state: UserModel[] = [{
    name: '',
    isLogged: false
}], action: UserActions.Actions) {
    switch(action.type) {
        case UserActions.USER_LOGIN:
            state[0].name = action.payload.name;
            state[0].isLogged = true;
            return [...state];
        default:
            return state;
    }
};
