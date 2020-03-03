import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { DialogAddtodoComponent } from '../../shared/components/dialog-addtodo/dialog-addtodo.component';
import { AppState } from '../../app.state';
import { TodoModel } from '../../models/todos.model';
import * as TodosActions from '../../actions/todos.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private todosSubscription: Subscription[] = [];
  todos$: Observable<TodoModel[]>;
  todosLen: number;

  constructor(
    private store: Store<AppState>,
    private addTododialog: MatDialog) {
    this.todos$ = store.select('todos');
  }

  ngOnInit(): void {
    this.todosSubscription.push(this.todos$.subscribe(result => {
      this.todosLen = result.length;
    }));
  }

  ngOnDestroy(): void {
    this.todosSubscription.forEach(subuscription => subuscription.unsubscribe());
  }

  openDialog(): void {
    const dialogRef = this.addTododialog.open(DialogAddtodoComponent, {
      width: '400px',
      data: {id: 0, taskDescription: ''}
    });

    this.todosSubscription.push(
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
      })
    );
  }

}
