import React, { Component } from 'react';
import { connect } from 'react-redux';

export default connect(state => {
    stories: state.stories
})(class Home extends Component {
    render(){
        console.log(this.props);
        return (
            <div className="home-container">
                <h3>Top 30 hackerNews Stories</h3>
            </div>
        )
    }
});