import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsBrandsComponent } from './solutions-brands.component';

describe('SolutionsBrandsComponent', () => {
  let component: SolutionsBrandsComponent;
  let fixture: ComponentFixture<SolutionsBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolutionsBrandsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolutionsBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
