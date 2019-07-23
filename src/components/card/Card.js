import React from 'react';
import './Card-style.js';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Style from './Card-style';
import {Animated} from "react-animated-css";
class Card extends React.Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount() {
      this.setState(this.props.cardProp);
    }
    handleClick() {
      if(!this.state.freeze && this.state.isToggleOn === false) {
        this.setState({isToggleOn:!this.state.isToggleOn});
        let returnHandler = (reset, freeze) => {
          if(freeze) {
            this.setState({freeze:freeze});
          }
          if(reset) {
            this.setState({isToggleOn:!reset});
          }
        };
        this.props.click(this.state.iconName, returnHandler);
      }
    }
    render() {
    let icon, className;
    if (this.state.isToggleOn) {
      className = 'active-border';
      icon =<Icon style={{ fontSize: 50, color:'#05f1dd' }}>{this.state.iconName}</Icon>   
    } else {
      className = '';
      icon = null;
    }
      return (
        <div className="card">
            <Paper style={Style.paperStyle} onClick={this.handleClick}>
              {icon}
            </Paper>
        </div>
      );
    }
}


export default Card;
