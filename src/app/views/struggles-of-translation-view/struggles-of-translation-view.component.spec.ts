import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrugglesOfTranslationViewComponent } from './struggles-of-translation-view.component';

describe('StrugglesOfTranslationViewComponent', () => {
  let component: StrugglesOfTranslationViewComponent;
  let fixture: ComponentFixture<StrugglesOfTranslationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrugglesOfTranslationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrugglesOfTranslationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
