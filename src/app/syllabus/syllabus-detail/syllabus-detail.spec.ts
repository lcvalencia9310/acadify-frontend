import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusDetail } from './syllabus-detail';

describe('SyllabusDetail', () => {
  let component: SyllabusDetail;
  let fixture: ComponentFixture<SyllabusDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyllabusDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(SyllabusDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
