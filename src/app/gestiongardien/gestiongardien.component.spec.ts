import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiongardienComponent } from './gestiongardien.component';

describe('GestiongardienComponent', () => {
  let component: GestiongardienComponent;
  let fixture: ComponentFixture<GestiongardienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestiongardienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestiongardienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
