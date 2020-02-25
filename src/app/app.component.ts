import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DialogAddtodoComponent } from './shared/components/dialog-addtodo/dialog-addtodo.component';
import { AppState } from './app.state';
import { TodoModel } from './models/todos.model';
import { Router, NavigationStart } from '@angular/router';
import * as TodosActions from './actions/todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos: Observable<TodoModel[]>;
  todosLen: number;
  isOnUpdate:boolean = false;

  constructor(
    private store: Store<AppState>,
    private addTododialog: MatDialog,
    private router: Router) {
    router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        this.isOnUpdate = event.url !== '/';
      }
    });
    this.todos = store.select('todos');
  }

  ngOnInit(): void {
    this.todos.subscribe(result => {
      this.todosLen = result.length;
    });
  }

  openDialog(): void {
    const dialogRef = this.addTododialog.open(DialogAddtodoComponent, {
      width: '400px',
      data: {id: 0, taskDescription: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      result = typeof result === 'string' ? result.trim() : null;
      if(result) {
        this.store.dispatch(
          new TodosActions.InsertTodo({
            id: this.todosLen + 1,
            taskDescription: result,
            isCompleted: false
          })
        )
      }
    });
  }

}
