import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacBoardComponent } from './contac-board.component';

describe('ContacBoardComponent', () => {
  let component: ContacBoardComponent;
  let fixture: ComponentFixture<ContacBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
