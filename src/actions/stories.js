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
    console.log(item.kids);
    item.kids = item.kids? item.kids : [];
    return Promise.all(item.kids.map(populateItem)).then( items => items);
}

export function getTopCommenters(story){
       getCommentsForStory(story); 
}

// really, this is a tree problem,
// let's go ahead and use BFS and append to a makeshift
// hashMap using JS objects
async function getCommentsForStory(story){
    let q = []; // queue for priority queue
    let c = {}; // object for commenters
    await getChildren(story).then(items => {
        q = q.concat(items);
    });
    while(q.length > 0){
        const item = q.shift();

        await getChildren(item).then( items => {
            q = q.concat(items);
        });
    }
}

const populateItem = id => itemRequests.getItem(id).then( response => response.data );