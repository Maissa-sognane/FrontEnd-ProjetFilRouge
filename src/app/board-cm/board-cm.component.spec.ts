import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCmComponent } from './board-cm.component';

describe('BoardCmComponent', () => {
  let component: BoardCmComponent;
  let fixture: ComponentFixture<BoardCmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardCmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardCmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
