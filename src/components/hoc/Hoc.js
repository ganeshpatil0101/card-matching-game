import React, { Component } from 'react'
import withUser from './comp';
 class HigherOrderComponent extends Component {
     constructor(props) {
         super(props)
     }
    render() {
        return (
            <div>
                <h1>HOC {this.props.user} </h1>
            </div>
        )
    }
}
export default withUser(HigherOrderComponent);
