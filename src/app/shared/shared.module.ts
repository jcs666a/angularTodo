import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DialogAddtodoComponent } from './components/dialog-addtodo/dialog-addtodo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { DialogLoginComponent } from './components/dialog-login/dialog-login.component';

@NgModule({
  declarations: [
    TodoListComponent,
    DialogAddtodoComponent,
    DialogLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    TodoListComponent
  ],
  entryComponents: [
    DialogAddtodoComponent,
    DialogLoginComponent
  ]
})
export class SharedModule {
  static forRoot() {
    return { ngModule: SharedModule };
  }
}
