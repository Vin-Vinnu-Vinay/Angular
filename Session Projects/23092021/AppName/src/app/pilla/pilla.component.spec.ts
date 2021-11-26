import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillaComponent } from './pilla.component';

describe('PillaComponent', () => {
  let component: PillaComponent;
  let fixture: ComponentFixture<PillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
