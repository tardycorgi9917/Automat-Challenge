import { SET_STORIES, SET_TOP_COMMENTERS } from './index';
import storiesRequests from './../requests/storiesRequests';
import itemRequests, { populateItem } from './../requests/itemRequests';

const num_stories = 30;

export function getTopStories(){
    return dispatch => {
        return storiesRequests.getTopStories().then( response => {
            const storyIDs = response.data.slice(0, num_stories);
            Promise.all(storyIDs.map(populateItem)).then( stories => {
                dispatch({type: SET_STORIES, stories});
            });
        }).catch( err => {console.log(err)})
    }
}