import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemisecleComponent } from './remisecle.component';

describe('RemisecleComponent', () => {
  let component: RemisecleComponent;
  let fixture: ComponentFixture<RemisecleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemisecleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemisecleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
