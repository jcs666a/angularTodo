import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { TodoModel } from '../../../models/todos.model';
import { UserModel } from '../../../models/user.model';
import { AppState } from '../../../app.state';
import { DataService } from '../../../data.service';
import { DialogLoginComponent } from '../dialog-login/dialog-login.component';
import { Router } from "@angular/router";
import * as TodosActions from '../../../actions/todos';
import * as UserActions from '../../../actions/user.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Observable<TodoModel[]>;
  todosLen: number;
  userInfo: Observable<UserModel[]>;
  isLogged: boolean = false;

  constructor(
    private router: Router,
    private dataService: DataService,
    private store: Store<AppState>,
    public loginDialog: MatDialog) {
    this.todos = store.select('todos');
    this.userInfo = store.select('user');
    this.todos.subscribe(result => {
      this.todosLen = result.length;
    });
  }

  ngOnInit(): void {
    if(this.todosLen === 0) {
      this.dataService.getTodos()
        .subscribe((data: TodoModel[]) => {
          data.map(todo => {
            this.store.dispatch(
              new TodosActions.InsertTodo(todo)
            )
          });
        });
    }
    this.userInfo.subscribe(result => {
      this.isLogged = result[0].isLogged;
    });
  }

  editTodo(id:number) {
    if(this.isLogged) {
      this.router.navigate(['update', id]);
    } else {
      this.openDialog(id);
    }
    /*
    this.store.dispatch(
      new TodosActions.UpdateTodo({
        id: id,
        taskDescription: 'Ahora es esto...',
        isCompleted: false
      })
    )
    */
  }

  deleteTodo(id:number) {
    this.store.dispatch(
      new TodosActions.CompleteTodo(id)
    )
  }


  openDialog(id:number): void {
    const dialogRef = this.loginDialog.open(DialogLoginComponent, {
      width: '400px',
      data: {id: 1, name: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      result = typeof result === 'string' ? result.trim() : null;
      if(result) {
        this.store.dispatch(
          new UserActions.LogginUser({
            name: result,
            isLogged: true
          })
        );
        this.router.navigate(['update', id]);
      }
    });
  }
}
