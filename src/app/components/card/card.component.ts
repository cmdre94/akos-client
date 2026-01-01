import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() public cardTitle: string;
  @Input() public cardText: string;
  @Input() public cardHeading: string;
  @Input() public cardText2: string;
  @Input() public buttonText: string;
  @Input() public buttonText2: string;
  @Input() public imageSrc: string;
  @Input() public useImage: boolean = false;
  @Input() public parentFunction: Function;
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @description - Call the parent function
   * @param {any} event -
   * @returns {void}
   */
  public callParentFunction(event: any): void {
    // You can use aria-pressed to check if buttons are pressed
    if (this.parentFunction) {
      this.parentFunction.apply(this.parentFunction, [event]);
    } else {
      // Do nothing
    }
  }

}
