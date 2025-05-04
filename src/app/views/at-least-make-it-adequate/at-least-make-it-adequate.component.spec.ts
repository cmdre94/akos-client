import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtLeastMakeItAdequateComponent } from './at-least-make-it-adequate.component';

describe('AtLeastMakeItAdequateComponent', () => {
  let component: AtLeastMakeItAdequateComponent;
  let fixture: ComponentFixture<AtLeastMakeItAdequateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtLeastMakeItAdequateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtLeastMakeItAdequateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
