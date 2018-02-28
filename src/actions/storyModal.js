import { OPEN_STORY_MODAL, CLOSE_STORY_MODAL } from './index';

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