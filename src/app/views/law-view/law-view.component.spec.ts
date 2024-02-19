import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawViewComponent } from './law-view.component';

describe('LawViewComponent', () => {
  let component: LawViewComponent;
  let fixture: ComponentFixture<LawViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
