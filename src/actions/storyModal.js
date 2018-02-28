import { OPEN_STORY_MODAL, CLOSE_STORY_MODAL, SET_MODAL_STORY } from './index';

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