import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardFormateurComponent } from './board-formateur.component';

describe('BoardFormateurComponent', () => {
  let component: BoardFormateurComponent;
  let fixture: ComponentFixture<BoardFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardFormateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
