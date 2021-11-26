import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillaBachaComponent } from './pilla-bacha.component';

describe('PillaBachaComponent', () => {
  let component: PillaBachaComponent;
  let fixture: ComponentFixture<PillaBachaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillaBachaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PillaBachaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
