import React, { Component } from 'react'
import LifeCycleHooks from './lifeCycleHooks';

import Button from '@material-ui/core/Button';
export default class wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mount:true,
            ignoreProp:true,
            seed:30
        }
    }
    mountComp = ()=> this.setState({mount:true});
    unmountComp = ()=> this.setState({mount:false});
    ignoreProp = ()=> this.setState({ignoreProp:Math.random()});
    seedGenerator = ()=> this.setState({seed:Number.parseInt(Math.random() * 100)})
    render() {
        return (
            <div>
                <Button variant="contained" style={{margin:10}} color="primary" disabled={this.state.mount} onClick={this.mountComp}> Mount Compo </Button>
                <Button variant="contained" style={{margin:10}} color="primary" disabled={!this.state.mount} onClick={this.unmountComp}> UnMount Compo </Button>
                <Button variant="contained" style={{margin:10}} color="primary" onClick={this.ignoreProp}> Ignore Props </Button>
                <Button variant="contained" style={{margin:10}} color="primary" onClick={this.seedGenerator}> GenarateSeed </Button>
                 {(this.state.mount) ? 
                    <LifeCycleHooks ignoreProp = {this.state.ignoreProp} seed={this.state.seed} / >
                    : null } 
            </div>
        )
    }
}
