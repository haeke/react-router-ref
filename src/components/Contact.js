import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Contact extends Component {
    handleSubmit = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h1>Contact</h1>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Contact);