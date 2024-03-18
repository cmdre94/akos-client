export class GetDetails {
  flowStatus: string;
  flowStatusMessage: string;
  prediction: number[];
  metrics: Metrics;
  intercept: string;
  coeff: Coefficients;
//   "result": {
//     "intercept": lm.intercept_,
//     "coefficients": coeff_df.to_json(),
//     "prediction": str(predictions),
//     "metrics": {
//         'mse': metrics.mean_squared_error(y_test, predictions),
//         'mae': metrics.mean_absolute_error(y_test, predictions),
//         'rmse': np.sqrt(metrics.mean_squared_error(y_test, predictions))
//     }
// }

  constructor(response: any) {
    try {
      if (response.flowStatus === 'SUCCESS' || response.flowStatus === 'FAILURE') {
        this.flowStatus = response.flowStatus;
        this.flowStatusMessage = response.flowStatusMessage;
      } else {
        this.flowStatus = 'FAILURE';
        this.flowStatusMessage = 'Unable to call API';
      }
      if (response.flowStatus === 'SUCCESS') {
        this.prediction = response?.result?.prediction;
        this.metrics = response?.result?.metrics;
        this.intercept = response?.result?.intercept
        this.coeff = response?.result?.coefficients ? JSON.parse(response?.result?.coefficients)?.coeff : null; // must use coeff that is the key from akos backend
      }
    } catch (e) {
      this.flowStatus = 'FAILURE';
      this.flowStatusMessage = 'Unable to parse API response';
    }
  }
}

export class Metrics {
  mse: number;
  mae: number;
  rmse: number;   
}

export class Coefficients {
  'Area Population': number;
  'Avg.Area House Age': number; 
  'Avg. Area Income': number;
  'Avg. Area Number of Bedrooms': number;
  'Avg. Area Number of Rooms': number;
}