import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDasboardComponent } from './result-dasboard.component';

describe('ResultDasboardComponent', () => {
  let component: ResultDasboardComponent;
  let fixture: ComponentFixture<ResultDasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultDasboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
