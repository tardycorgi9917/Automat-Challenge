import { SET_STORIES } from './index';
import storiesRequests from './../requests/storiesRequests';
import itemRequests from './../requests/itemRequests';

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

export function getChildren(item){
    return Promise.all(item.kids.map(populateItem)).then( items => items);
}

// really, this is a tree problem,
// let's go ahead and use BFS and append to a makeshift
// hashMap using JS objects
export function getCommentsForStory(story){
    let q = []; // queue for priority queue
    let c = {}; // object for commenters
    q = q.concat(getChildren(story));

    while(q.length > 0){
        const item = q.shift();

        q = q.concat(getChildren(item));
        console.log(q);
    }
}

const populateItem = id => itemRequests.getItem(id).then( response => response.data );