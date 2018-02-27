import React, { Component } from 'react';
import StoryCard from './../../components/StoryCard';
import { connect } from 'react-redux';
import { getTopStories, getChildren, getCommentsForStory } from './../../actions/stories';
import './style.css';
 
export default connect(state => ({
    stories: state.stories.stories
}), {
    getTopStories,
    getChildren
})(class Home extends Component {
    componentWillMount(){
        this.props.getTopStories();
    }
    getStoryComments(story){
       
    }
    renderStories(){
        console.log(this.props.stories);
        return this.props.stories.map((s, i) =>
            <StoryCard key={i} {...s} onSelect={() => this.getStoryComments(s)}/>
        )
    }
    render(){
        return (
            <div className="home-container">
                <h2>HackerNews</h2>
                <div className={"story-container"}>
                    {this.renderStories()}
                </div>
            </div>
        )
    }
});