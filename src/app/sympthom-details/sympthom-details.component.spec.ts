import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SympthomDetailsComponent } from './sympthom-details.component';

describe('SympthomDetailsComponent', () => {
  let component: SympthomDetailsComponent;
  let fixture: ComponentFixture<SympthomDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SympthomDetailsComponent]
    });
    fixture = TestBed.createComponent(SympthomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
