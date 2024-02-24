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

  public onView(): void {
    this.router.navigate(['strugglesOfTranslation']);
  }
}
