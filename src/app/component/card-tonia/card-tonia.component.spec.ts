import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardToniaComponent } from './card-tonia.component';

describe('CardToniaComponent', () => {
  let component: CardToniaComponent;
  let fixture: ComponentFixture<CardToniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardToniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardToniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
