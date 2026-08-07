import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusForm } from './syllabus-form';

describe('SyllabusForm', () => {
  let component: SyllabusForm;
  let fixture: ComponentFixture<SyllabusForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyllabusForm],
    }).compileComponents();

    fixture = TestBed.createComponent(SyllabusForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
