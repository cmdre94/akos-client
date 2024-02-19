import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input() public text: string;
  @Input() public type: string;
  @Input() public value: string;
  @Input() public id: string;
  @Input() public buttonSmall: boolean;
  @Input() public buttonLarge: boolean;
  @Input() public parentFunction: Function;
  @Input() public submit: boolean;
  @Input() public isDisabled: boolean;
  @Input() public buttonLoader: boolean;
  @Input() public status: boolean;
  @Input() public buttonOutline: boolean;
  @Input() public buttonName: string = 'Button';
  @Input() public completeSuccess: boolean;
  @Input() public buttonWhite: boolean;
  @Input() public isExternalLink: boolean;
  @Input() public smFont: boolean;
  @Input() public addPlugin: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @description - Call the parent function
   * @param {any} event -
   * @returns {void}
   */
  public callParentFunction(event: any): void {
    // You can use aria-pressed to check if linkss are pressed
    if (this.parentFunction) {
      this.parentFunction.apply(this.parentFunction, [event]);
    } else {
      // Do nothing
    }
  }

}
