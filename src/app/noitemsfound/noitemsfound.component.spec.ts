import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoitemsfoundComponent } from './noitemsfound.component';

describe('NoitemsfoundComponent', () => {
  let component: NoitemsfoundComponent;
  let fixture: ComponentFixture<NoitemsfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoitemsfoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoitemsfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
