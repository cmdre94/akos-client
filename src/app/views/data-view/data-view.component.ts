import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

import { GetDetailsService } from '../../services/get-details.service';
import { StandardPostResponse } from 'src/app/services/standard-post.model';
import { Coefficients, GetDetails } from '../../services/get-details.model'


@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {
  private ngUnsubscribe: Subject<void> = new Subject();

  public dateForm: FormGroup;
  public housingDataForm: FormGroup;
  public getDetailsResults: GetDetails;
  public dateResults: String;
  public coefs: Coefficients;

  constructor(private getDetailsService: GetDetailsService, private router: Router) { }

  ngOnInit(): void {
    this.dateForm = new FormGroup({
      'currentDate': new FormControl(null),
      'previousDate': new FormControl(null),
      'days': new FormControl(null)
    });
    this.housingDataForm = new FormGroup({
      'AvgAreaIncome': new FormControl(null),
      'AvgAreaHouseAge': new FormControl(null),
      'AvgAreaNumberOfRooms': new FormControl(null),
      'AvgAreaNumberOfBedrooms': new FormControl(null),
      'AreaPopulation': new FormControl(null)
    })
    this.subscribeGetDetails();
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
        this.coefs = this.getDetailsResults?.coeff;
      }
    });
  }

  /**
   * @description - calls getDetailsService to get data
   * @returns {void}
   */
  public callGetDetails(): void {
    const payload = {
      key: 'mijkof-2nAhpo-rigwuf-vofpit-Hupmed-gikwy3',
      data: {
        'Avg. Area Income': [this.housingDataForm.value.AvgAreaIncome],
        'Avg. Area House Age': [this.housingDataForm.value.AvgAreaHouseAge],
        'Avg. Area Number of Rooms': [this.housingDataForm.value.AvgAreaNumberOfRooms],
        'Avg. Area Number of Bedrooms': [this.housingDataForm.value.AvgAreaNumberOfBedrooms],
        'Area Population': [this.housingDataForm.value.AreaPopulation]
      }
    }
    this.getDetailsService.call(payload);
  }

  /**
   * @description - Submits the form
   * @returns {void}
   */
  processDate(): void {
    const currentDateInMs = new Date(this.dateForm?.value?.currentDate)?.setDate(new Date(this.dateForm?.value?.currentDate)?.getDate());
    const previousDateInMs = new Date(this.dateForm?.value?.previousDate)?.setDate(new Date(this.dateForm?.value?.previousDate)?.getDate());
    const daysInMs = this.dateForm?.value?.days * 24 * 60 * 60 * 1000;
    if ((currentDateInMs > previousDateInMs)) {
      this.dateResults = 'The previous date was ' + (currentDateInMs - previousDateInMs) / (24*60*60*1000) + ' days in the past';
    } else {
      this.dateResults = 'The previous date must be less than the current date';
    }
  }
}
