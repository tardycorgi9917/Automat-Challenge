import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './../Modal';

export default connect()(class StoryModalContainer extends Component {
    render(){
        return(
            <Modal />
        )
    }
})