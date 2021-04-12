import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampanaDetailsComponent } from './sampana-details.component';

describe('SampanaDetailsComponent', () => {
  let component: SampanaDetailsComponent;
  let fixture: ComponentFixture<SampanaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampanaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampanaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
