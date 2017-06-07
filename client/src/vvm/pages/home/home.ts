import {Constants} from "../../../config/constants";
const Plotly = require('../../../lib/plugins/plotly');

export class Home {


  attached() {
    this.dataPlot();
  }

  dataPlot() {

    const TESTER = document.getElementById('chartContainer');

    const config = {
      displayModeBar: false
    };

    Plotly.plot(TESTER, [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16],
      line: {
        color: Constants.COLOR_PRIMARY
      }
    }], {
      margin: {t: 50, b: 50, l: 50, r: 50},
      xaxis: {showline: false}
    }, config);
  }

}
