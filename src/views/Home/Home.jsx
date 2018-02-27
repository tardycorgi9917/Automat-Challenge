import React, { Component } from 'react';
import StoryCard from './../../components/StoryCard';
import { connect } from 'react-redux';
import { getTopStories } from './../../actions/stories';
 
export default connect(state => ({
    stories: state.stories.stories
}), {
    getTopStories
})(class Home extends Component {
    componentWillMount(){
        this.props.getTopStories();
    }
    renderStories(){
        console.log(this.props.stories);
        return this.props.stories.map((s, i) =>
            <StoryCard key={i} {...s}/>
        )
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