import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymthomsComponent } from './symthoms.component';

describe('SymthomsComponent', () => {
  let component: SymthomsComponent;
  let fixture: ComponentFixture<SymthomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SymthomsComponent]
    });
    fixture = TestBed.createComponent(SymthomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
