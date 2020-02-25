import { Action } from '@ngrx/store';
import { TodoModel } from '../models/todos.model';

export const TODO_INSERT = '[TODO] Insert';
export const TODO_UPDATE = '[TODO] Update';
export const TODO_COMPLETE = '[TODO] Complete';

export class InsertTodo implements Action {
    readonly type = TODO_INSERT;

    constructor(public payload: TodoModel) {}
};

export class UpdateTodo implements Action {
    readonly type = TODO_UPDATE;

    constructor(public payload: TodoModel) {}
};

export class CompleteTodo implements Action {
    readonly type = TODO_COMPLETE;

    constructor(public payload: number) {}
};

export type Actions = InsertTodo | UpdateTodo | CompleteTodo;
