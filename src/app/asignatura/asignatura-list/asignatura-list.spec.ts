import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaList } from './asignatura-list';

describe('AsignaturaList', () => {
  let component: AsignaturaList;
  let fixture: ComponentFixture<AsignaturaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignaturaList],
    }).compileComponents();

    fixture = TestBed.createComponent(AsignaturaList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
