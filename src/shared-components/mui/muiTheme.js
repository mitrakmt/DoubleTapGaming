import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500, grey400, grey500, grey600, darkBlack, white, grey300, fullBlack } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#0288F9',
    primary2Color: '#0288F9',
    primary3Color: grey400,
    accent1Color: '#0288F9',
    accent2Color: grey300,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: '#FFFFFF',
    canvasColor: white,
    borderColor: grey600,
    pickerHeaderColor: cyan500,
    shadowColor: fullBlack,
  }
});

export default muiTheme;
