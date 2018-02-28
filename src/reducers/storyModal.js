import { OPEN_STORY_MODAL, CLOSE_STORY_MODAL } from './../actions';

const initialState = {
    commenters: [],
    isOpen: false,
    story: {}
}

export default (state = initialState, action = {}) => {
    switch(action.type){
        case OPEN_STORY_MODAL:
            return {
                ...state,
                isOpen: true
            }
        case CLOSE_STORY_MODAL:
            return {
                ...state,
                isOpen: false
            }
        default: return state;
    }
}