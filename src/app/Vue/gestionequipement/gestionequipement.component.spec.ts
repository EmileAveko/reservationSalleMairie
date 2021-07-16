import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionequipementComponent } from './gestionequipement.component';

describe('GestionequipementComponent', () => {
  let component: GestionequipementComponent;
  let fixture: ComponentFixture<GestionequipementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionequipementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionequipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
