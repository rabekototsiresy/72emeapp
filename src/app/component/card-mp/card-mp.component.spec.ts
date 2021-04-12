import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMpComponent } from './card-mp.component';

describe('CardMpComponent', () => {
  let component: CardMpComponent;
  let fixture: ComponentFixture<CardMpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
