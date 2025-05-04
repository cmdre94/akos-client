import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-writing-view',
  templateUrl: './writing-view.component.html',
  styleUrls: ['./writing-view.component.css']
})
export class WritingViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onView(view: Number): void {
    if (view === 0) {
      this.router.navigate(['strugglesOfTranslation']);
    } else if (view === 1) {
      this.router.navigate(['atLeastMakeItAdequate']);
    }
  }
}
