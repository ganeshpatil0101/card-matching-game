import React from 'react';
import './App.css';
import SpacingGrid from './components/grid/Grid';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
// import {darkBaseTheme} from 'material-ui/styles/baseThemes/darkBaseTheme';
// import * as Colors from 'material-ui/styles/colors';
// import { fade } from 'material-ui/utils/colorManipulator'

// const getTheme = () => {
//   let overwrites = {
//     "palette": {
//         "primary1Color": "#1e88e5"
//     }
// };
//   return getMuiTheme(darkBaseTheme, overwrites);
// }



class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateCount = this.updateCount.bind(this);
  }
  componentWillMount() {
    this.setState({totalPairs:0, matchedPairs : 0});
  }
  updateCount(totalPairs, matchedPairs) {
    this.setState({totalPairs, matchedPairs});
  }
  render() {
    
  return (
        <div className="App">
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper style={{height:60, display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 
                <Box fontSize="h6.fontSize" fontWeight="fontWeightBold">Matching Card Game
                </Box>
                </Paper>
              <Paper style={{marginTop:30, paddingTop:20, paddingBottom:20}}>
                <Box fontSize="h6.fontSize"> Total Pairs : {this.state.totalPairs} 
                </Box>
                <Box fontSize="h6.fontSize">Matched Pairs : {this.state.matchedPairs} 
                </Box>
              </Paper>
             
            </Grid>
            <Grid item xs={9}>
              <SpacingGrid updateCount={this.updateCount} ></SpacingGrid>
            </Grid>
          </Grid>
        </div>
    );
  }
}

export default App;
