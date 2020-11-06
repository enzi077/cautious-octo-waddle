import { createMuiTheme} from '@material-ui/core/styles';
import { blueGrey} from '@material-ui/core/colors';

export const theme=createMuiTheme({
    palette:{
        primary:{
            main: blueGrey[800],
            light: blueGrey[100]
        },
        secondary:{
            main: '#00e676',
            light: '#b9f6ca'
        }
    }
})