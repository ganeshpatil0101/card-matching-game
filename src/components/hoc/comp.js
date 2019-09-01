import React, {Component} from 'react';

export default function withUser(WrappedComponent) {
    return class WithUser extends React.Component {
        constructor(props) {
            super(props);
            this.state= {
                user:'CurrentUser'
            }
           // this.setState({'user':'CurrentUser'});
        }
        render() {
            return (
                <div>
                    <h2>UserName : {this.state.user}</h2>
                    <WrappedComponent user={this.state.user} {...this.props} />
                </div>
            );
        }
    }

};
