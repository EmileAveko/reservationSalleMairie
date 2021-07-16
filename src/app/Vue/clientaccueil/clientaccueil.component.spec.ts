import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientaccueilComponent } from './clientaccueil.component';

describe('ClientaccueilComponent', () => {
  let component: ClientaccueilComponent;
  let fixture: ComponentFixture<ClientaccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientaccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientaccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
