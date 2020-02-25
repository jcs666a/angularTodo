import { TodoModel } from './models/todos.model';
import { UserModel } from './models/user.model';

export interface AppState {
    readonly todos: TodoModel[];
    readonly user: UserModel[];
};
