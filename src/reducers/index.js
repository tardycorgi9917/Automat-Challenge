import { combineReducers } from 'redux';
import stories from './stories';
import storyModal from './storyModal';

export default combineReducers({
    stories,
    storyModal
});