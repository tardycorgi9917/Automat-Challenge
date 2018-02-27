import React, { Component } from 'react';
import { connect } from 'react-redux';

export default connect(state => ({
    stories: state.stories.stories
}))(class Home extends Component {
    componentWillMount(){

    }
    renderStories(){
        return this.props.stories.map((s, i) => {
            <div key={i}>A STORY</div>
        })
    }
    render(){
        return (
            <div className="home-container">
                <h3>Top 30 hackerNews Stories</h3>
                {this.renderStories()}
            </div>
        )
    }
});