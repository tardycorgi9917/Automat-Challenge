import { SET_STORIES } from './index';


export function getTopStories(){
    return dispatch => {
        return dispatch({type: SET_STORIES, stories: ['SURFACE BOOKS SUCK']});
    }
}