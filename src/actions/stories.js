import { SET_STORIES } from './index';
import storiesRequests from './../requests/storiesRequests';

export function getTopStories(){
    return dispatch => {
        return storiesRequests.getTopStories().then( response => {
            dispatch({type: SET_STORIES, stories: response.data.slice(0, 30)});
        }).catch( err => {console.log(err)})
    }
}