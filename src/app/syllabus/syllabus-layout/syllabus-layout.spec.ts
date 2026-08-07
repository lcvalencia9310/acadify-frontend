import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusLayout } from './syllabus-layout';

describe('SyllabusLayout', () => {
  let component: SyllabusLayout;
  let fixture: ComponentFixture<SyllabusLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyllabusLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(SyllabusLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
