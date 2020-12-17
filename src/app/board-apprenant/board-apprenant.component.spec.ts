import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardApprenantComponent } from './board-apprenant.component';

describe('BoardApprenantComponent', () => {
  let component: BoardApprenantComponent;
  let fixture: ComponentFixture<BoardApprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardApprenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
