import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingViewComponent } from './writing-view.component';

describe('WritingViewComponent', () => {
  let component: WritingViewComponent;
  let fixture: ComponentFixture<WritingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritingViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
