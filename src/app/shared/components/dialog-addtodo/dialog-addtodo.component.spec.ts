import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddtodoComponent } from './dialog-addtodo.component';

describe('DialogAddtodoComponent', () => {
  let component: DialogAddtodoComponent;
  let fixture: ComponentFixture<DialogAddtodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddtodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddtodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
