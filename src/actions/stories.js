import { SET_STORIES } from './index';
import storiesRequests from './../requests/storiesRequests';
import itemRequests from './../requests/itemRequests';

export function getTopStories(){
    return dispatch => {
        return storiesRequests.getTopStories().then( response => {
            const storyIDs = response.data.slice(0, 30);
            const storyPromises = storyIDs.map(populateStory);
            Promise.all(storyPromises).then( stories => {
                dispatch({type: SET_STORIES, stories});
            })
        }).catch( err => {console.log(err)})
    }
}


function populateStory(id){
    return itemRequests.getItem(id).then( response => response.data );
}