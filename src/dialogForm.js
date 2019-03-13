import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const DialogForm = ({ open, dialogTitle, formId, formFields, onSubmit, handleClose }) => (
	<Dialog
		open={open}
		onClose={handleClose}
		aria-labelledby="form-dialog-title"
	>
		<form id={formId} onSubmit={onSubmit}>
			<DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>
				<DialogContent>
					{formFields}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button
						type="submit"
						color="primary"
					>
						Submit
					</Button>
				</DialogActions>
			</form>
		</Dialog>
)

export default DialogForm;