import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaForm } from './asignatura-form';

describe('AsignaturaForm', () => {
  let component: AsignaturaForm;
  let fixture: ComponentFixture<AsignaturaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignaturaForm],
    }).compileComponents();

    fixture = TestBed.createComponent(AsignaturaForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
