import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoList } from './resultado-list';

describe('ResultadoList', () => {
  let component: ResultadoList;
  let fixture: ComponentFixture<ResultadoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoList],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultadoList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
