import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoryModal from './StoryModal';
import { closeStoryModal } from './../../actions/storyModal';

export default connect(state => ({
    storyModal: state.storyModal
}), {
    closeStoryModal
})(class StoryModalContainer extends Component {
    render(){
        return(
            <StoryModal {...this.props.storyModal}
                        onClose={this.props.closeStoryModal}/>
        )
    }
})