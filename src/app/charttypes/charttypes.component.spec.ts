import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharttypesComponent } from './charttypes.component';

describe('CharttypesComponent', () => {
  let component: CharttypesComponent;
  let fixture: ComponentFixture<CharttypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharttypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharttypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
