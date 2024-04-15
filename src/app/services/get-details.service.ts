import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { StandardPostResponse } from './standard-post.model';
import { GetDetails } from './get-details.model';


@Injectable({
  providedIn: 'root'
})
export class GetDetailsService {
  private loading: boolean = false;
  private loadingChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private httpSubscription: Subscription;
  private isSuccessfullyCompleted: boolean = false;
  private apiResults: GetDetails = null;
  private serverUrl: string = window.location.href.includes('localhost') ? 'http://localhost:8000' : 'https://akos-backend.azurewebsites.net';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * @description - Reset all data in this service to make a clean slate for the next job.
   * @returns {void}
   */
  public resetData(): void {
    this.updateLoading(false);
    this.isSuccessfullyCompleted = false;
    this.apiResults = null;
    this.cancelRequest();
  }

  /**
   * @description - Cancel any pending http requests
   * @returns {void}
   */
  private cancelRequest(): void {
    if (this.httpSubscription) {
      if (!this.httpSubscription.closed) {
        this.httpSubscription.unsubscribe();
      }
    }
  }

  /**
   * @description - Method to update loading status
   * @returns {Observable<boolean>} - the loading status as an observable
   */
  public getLoading(): Observable<boolean> {
    return this.loadingChanged.asObservable();
  }

  /**
   * @description - Update the local loading value and emit update to any subscribers
   * @param {boolean} loading - New loading value
   * @returns {void}
   */
  private updateLoading(loading: boolean): void {
    this.loading = loading;
    this.loadingChanged.next(this.loading);
  }

  /**
   * @description - Used to determine if this service has completed successfully on the current job
   * @returns {boolean} - Success value
   */
  public hasSuccessfullyCompleted(): boolean {
    return this.isSuccessfullyCompleted;
  }

  /**
   * @description - returning the result.
   * @returns {GetDetails} - returns the API result.
   */
  public getResults(): GetDetails {
    return this.apiResults;
  }

  /**
   * @description - This function builds the API payload and makes the call to backend
   *
   * @returns {void}
   */
  public call(data: object): void {
    // Checking optional parameters are blank or not, if blank assigning Default value
    if (!this.loading) {
      const serverHost: string = this.serverUrl + '/getDetails';
      if (!serverHost) {
        return;
      }
      this.updateLoading(true);
      const payload: Object = {
        data,
      };
      let fullUrl: string = `${serverHost}`;
      this.httpSubscription = this.http.post(`${fullUrl}`, payload).subscribe(
        (response: any) => {
          this.apiResults = new GetDetails(response);
          this.isSuccessfullyCompleted = true;
          this.updateLoading(false);
        },
        (error: any) => {
          this.apiResults = new GetDetails(error);
          this.isSuccessfullyCompleted = false;
          this.updateLoading(false);
        }
      );
    }
  }
}
