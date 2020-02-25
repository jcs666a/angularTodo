import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

export interface DialogData {
  id: number;
  taskDescription: string;
}

@Component({
  selector: 'app-dialog-addtodo',
  templateUrl: './dialog-addtodo.component.html',
  styleUrls: ['./dialog-addtodo.component.scss']
})
export class DialogAddtodoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogAddtodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
