import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBeaComponent } from './card-bea.component';

describe('CardBeaComponent', () => {
  let component: CardBeaComponent;
  let fixture: ComponentFixture<CardBeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBeaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
