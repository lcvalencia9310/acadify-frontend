import { TestBed } from '@angular/core/testing';

import { Syllabus } from './syllabus';

describe('Syllabus', () => {
  let service: Syllabus;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Syllabus);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
