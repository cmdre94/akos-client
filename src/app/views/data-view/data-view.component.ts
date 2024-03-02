import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

import { GetDetailsService } from '../../services/get-details.service';
import { StandardPostResponse } from 'src/app/services/standard-post.model';


@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {
  private ngUnsubscribe: Subject<void> = new Subject();
  
  public getDetailsResults: StandardPostResponse;

  constructor(private getDetailsService: GetDetailsService, private router: Router) { }

  ngOnInit(): void {
    this.subscribeGetDetails();
    this.callGetDetails();
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    this.getDetailsService.resetData();
  }

  /**
   * @description - subscribes to getDetailsService
   * @returns {void}
   */
  private subscribeGetDetails(): void {
    this.getDetailsService.getLoading().pipe(takeUntil(this.ngUnsubscribe)).subscribe((loading: boolean) => {
      if (!loading) {
        this.getDetailsResults = this.getDetailsService.getResults();
      }
    });
  }

  /**
   * @description - calls getDetailsService to get data
   * @returns {void}
   */
  private callGetDetails(): void {
    const payload = {
      key: 'hello'
    }
    this.getDetailsService.call(payload);
  }
}
