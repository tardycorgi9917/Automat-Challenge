import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoryModal from './StoryModal';

export default connect(state => ({

}))(class StoryModalContainer extends Component {
    render(){
        return(
            <StoryModal />
        )
    }
})