import { 
    OPEN_STORY_MODAL, 
    CLOSE_STORY_MODAL, 
    SET_MODAL_STORY,
    SET_TOP_COMMENTERS
 } from './index';
 import itemRequests, { populateItem } from './../requests/itemRequests';


export function openStoryModal(){
    return dispatch => {
        dispatch({type: OPEN_STORY_MODAL});
    }
}

export function closeStoryModal(){
    return dispatch => {
        dispatch({type: CLOSE_STORY_MODAL});
    }
}

export function setModalStory(story){
    return dispatch => {
        dispatch({type: SET_MODAL_STORY, story});
    }
}

export function getTopCommenters(story){
    return dispatch => {
        dispatch({type: SET_TOP_COMMENTERS, commenters: ['Mark Cuban', 'Dirk Nowitzki']});
    }
}

function getChildren(item){
    console.log(item.kids);
    item.kids = item.kids? item.kids : [];
    return Promise.all(item.kids.map(populateItem)).then( items => items);
}

// export function getTopCommenters(story){
//     const c = getCommentsForStory(story);
//     const vals = Object.entries(c).sort( (a,b) => b[1] - a[1]).slice(0, 10);

//     return vals;
// }

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
        (item.by in c) ? c[item.by]++ : c[item.by] = 1;
        await getChildren(item).then( items => {
            q = q.concat(items);
        });
    }

    return c;
}