import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            toContact: false,
        };
    }

    handleSubmit = () => {
        this.setState({
            toContact: true,
        });
    }
    render() {
        if (this.state.toContact === true) {
            return <Redirect to='/contact' />
        }
        return (
            <div>
                <h1>Home Page</h1>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">Contact me</button>
                </form>
            </div>
        );
    }
}

export default Home;