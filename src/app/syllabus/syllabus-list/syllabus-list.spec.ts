import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusList } from './syllabus-list';

describe('SyllabusList', () => {
  let component: SyllabusList;
  let fixture: ComponentFixture<SyllabusList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyllabusList],
    }).compileComponents();

    fixture = TestBed.createComponent(SyllabusList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
