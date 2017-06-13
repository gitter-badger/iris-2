import "../../../lib/vendor/spectrum/spectrum.scss";
import "../../../lib/vendor/spectrum/spectrum.js";
import {Constants} from "../../../config/constants";

export class Test {
  attached() {
    $("#colorpicker").spectrum({
      color: "#f00",
      showPaletteOnly: true,
      togglePaletteOnly: true,
      togglePaletteMoreText: 'more',
      togglePaletteLessText: 'less',
      showInput: true,
      allowEmpty: true,
      showAlpha: true,
      showPalette: true,
      // showInitial: true,
      palette: [
        Constants.COLORS_GRAPH_PRIMARY
      ]
    });
  }
}
