export class StandardPostResponse {
  flowStatus: string;
  flowStatusMessage: string;
  postResponse: string;

  constructor(response) {
    try {
      if (response.flowStatus === 'SUCCESS' || response.flowStatus === 'FAILURE') {
        this.flowStatus = response.flowStatus;
        this.flowStatusMessage = response.flowStatusMessage;
      } else {
        this.flowStatus = 'FAILURE';
        this.flowStatusMessage = 'Unable to call API';
      }
      if (response.flowStatus === 'SUCCESS') {
        this.postResponse = response.result;
      }
    } catch (e) {
      this.flowStatus = 'FAILURE';
      this.flowStatusMessage = 'Unable to parse API response';
    }
  }
}