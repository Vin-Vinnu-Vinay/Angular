import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillaPumkaComponent } from './pilla-pumka.component';

describe('PillaPumkaComponent', () => {
  let component: PillaPumkaComponent;
  let fixture: ComponentFixture<PillaPumkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillaPumkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PillaPumkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
