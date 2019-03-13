import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';

const EditForm = ({ handleChange, newRecord }) => (
	<Fragment>
		<TextField 
				id="record-album" 
				type='text' 
				label="Album" 
				name="album" 
                margin="dense" 
                placeholder="Album"
				value={newRecord.album} 
				onChange={handleChange}
				fullWidth
		/>
		<TextField 
            id="record-artist" 
            type='text'
            label="Artist" 
            name="artist" 
            margin="dense" 
            placeholder="Artist"
            value={newRecord.artist} 
            onChange={handleChange}
            fullWidth
		/>
		<TextField
			label="Date"
            name="date"
            type="number"
			margin="dense"
			fullWidth
			value={newRecord.date}
			onChange={handleChange}
		/>
		<TextField
			label="URL"
            name="imageUrl"
            type="text"
			margin="dense"
			fullWidth
			value={newRecord.imageUrl}
			onChange={handleChange}
		/>
	</Fragment>
)

export default (EditForm);