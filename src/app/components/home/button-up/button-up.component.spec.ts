import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonUpComponent } from './button-up.component';

describe('ButtonUpComponent', () => {
  let component: ButtonUpComponent;
  let fixture: ComponentFixture<ButtonUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
