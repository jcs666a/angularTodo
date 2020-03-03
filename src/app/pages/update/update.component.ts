import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from "@angular/router";
import { AppState } from '../../app.state';
import { TodoModel } from '../../models/todos.model';
import * as TodosActions from '../../actions/todos.actions';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  private todosSubscription: Subscription[] = [];
  id: number;
  taskDescription: string;
  todos$: Observable<TodoModel[]>;
  todosLen: number;
  todoEditable: TodoModel[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>) {
    this.todos$ = store.select('todos');

    this.todosSubscription.push(this.todos$.subscribe(result => {
      this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
      this.todoEditable = result.filter(todo => todo.id === this.id);
      this.taskDescription = this.todoEditable[0].taskDescription;
      this.todosLen = result.length;
    }));
  }

  ngOnInit(): void {
    if(this.todosLen === 0) {
      this.cancel();
    }
  }

  cancel():void {
    this.router.navigate(['/']);
  }

  save():void {
    this.taskDescription = this.taskDescription.trim();
    if(this.taskDescription !== '') {
      this.store.dispatch(
        new TodosActions.UpdateTodo({
          id: this.id,
          taskDescription: this.taskDescription,
          isCompleted: false
        })
      );
      this.router.navigate(['/']);
    } else {
      alert('You must set a task description!');
    }
  }

  ngOnDestroy() {
    this.todosSubscription.forEach(subuscription => subuscription.unsubscribe());
  }

}
