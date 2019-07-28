import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
export default class LifeCycleHooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:0,
            logs:[],
            seed:0
        }
        console.log(" constructor ")
       // this.addLogs("Counstructor");
    }
    static getDerivedStateFromProps(props, state) {
        if(props.seed && state.seed !== props.seed) {
            return {
                seed:props.seed,
                counter:props.seed
            }
        }
        // return default when we dont want to copy props to state
        return null;
    }
    // componentWillMount() {
    //     console.log(" componentWillMount ");
    //     this.addLogs(" componentWillMount ")
    // }
    componentDidMount() {
        console.log(" componentDidMount ");
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(" componentDidUpdate ", prevProps, prevState, snapshot);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp ) {
            console.log(" shouldComponentUpdate should not render ");
            return false;
        }
        console.log(" shouldComponentUpdate should render ");
        return true;
    }
    addLogs(eventName) {
        let l = this.state.logs.push(eventName);
        this.setState({logs:l});
    }
    increment = () => this.setState({counter : this.state.counter+1});
    decrement = () => this.setState({counter : this.state.counter-1});
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // this will pass to componentDidUpdate as third param snapshot
        return null;
    }
    render() {
        console.log(" RENDER ");
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Button variant="contained" style={{margin:10}} color="primary" onClick={this.increment}>increment </Button>
                        <Button variant="contained" color="primary" onClick={this.decrement}>decrement </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper style={{height:60, display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 
                            <Box fontSize="h6.fontSize" fontWeight="fontWeightBold">
                                Counter : {this.state.counter}
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        {this.state.logs}
                    </Grid>
                </Grid>
            </div>
        )
    }

    componentWillUnmount() {
        console.log(" componentWillUnmount ");
    }

}
