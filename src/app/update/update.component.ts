import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  public isOpen: boolean;
  constructor() {}

  ngOnInit(): void {
    this.isOpen = true;
  }

}
