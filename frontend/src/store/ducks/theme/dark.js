import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import { darken } from "@material-ui/core/styles/colorManipulator";

const dark = {
  direction: "ltr",
  paletteType: "dark",
  paletteColors: {
    primary: blue,
    secondary: {
      // Darken so we reach the AA contrast ratio level.
      main: darken(red.A400, 0.08)
    }
  }
};

export default dark;
