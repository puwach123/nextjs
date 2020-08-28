import { createMuiTheme, Theme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const theme: Theme = createMuiTheme({
  overrides: {},
  palette: {
    primary: blue,
    background: {
      default: "#fff",
    },
  },
});

export default theme;
