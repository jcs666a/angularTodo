import { TodoModel } from '../models/todos.model';
import * as TodosActions from '../actions/todos.actions';

export function todosReducer(state: TodoModel[] = [], action: TodosActions.Actions) {
    switch(action.type) {
        case TodosActions.TODO_INSERT:
            return [...state, action.payload];
        case TodosActions.TODO_UPDATE:
            state.filter(todo => {
                if(todo.id === action.payload.id) {
                    todo.taskDescription = action.payload.taskDescription;
                    return true;
                } else {
                    return false;
                }
            });
        case TodosActions.TODO_COMPLETE:
            state.filter(todo => {
                if(todo.id === action.payload) {
                    todo.isCompleted = true;
                    return true;
                } else {
                    return false;
                }
            });
        default:
            return state;
    }
};
