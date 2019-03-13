import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import EditForm from './Form/editForm';
import DialogForm from './Form/dialogForm';

class EditRecord extends Component {

	state = {
        open: false,
        id: '',
        record: '',
        album: '',
        artist: '',
        date: '',
        imageUrl: ''
	}

	handleOpen = () => {
		const { value } = this.props;
		this.setState({
			...this.state,
            open: true,
            id: value.id,
            record: 0,
            album: value.album,
            artist: value.artist,
            date: value.date,
            imageUrl: value.imageUrl
        });                
	}

    // handle changes in the form inputs
    handleChange = (event) => {
        console.log('edit handleChange', event.target.value);
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        });
    }
    
    onSubmit = () => {
        console.log('Submitted PUT update');
        const { id, record, album, artist, date, imageUrl } = this.state;
        
        // PUT records call goes here

        this.handleClose();	
    }

	handleClose = () => {
		this.setState({
			open: false,
                id: '',
				record: '',
				album: '',
				artist: '',
				date: '',
				imageUrl: ''
        }); 
	}

    render() {
        const { state, open } = this.state;
        return (
            <div>
                <Button color="primary" onClick={() => this.handleOpen(state)}>
                    Edit
                </Button>
                <DialogForm
                    open={open}
                    dialogTitle={'Edit Record'}
                    formId={'edit-action'}
                    formFields={
                        <EditForm
                            handleChange={this.handleChange}
                            newRecord={this.state}
                            editMode={true}
                        />
                    }
                    onSubmit={this.onSubmit}
                    handleClose={this.handleClose}
                />
            </div>
        );
    }
}

export default (EditRecord);