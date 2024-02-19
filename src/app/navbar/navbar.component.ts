import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * @description - route to the view URL provided to this method
   * @param {string} url - the URL to route to
   * @returns {void}
   */
  public routeToView(url: string): void {
    this.router.navigate([url]);
  }
}
