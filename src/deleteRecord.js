import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class DeleteRecord extends Component {

  deleteRecord = (id) => {
    console.log('deleting Record: ', id);
  }

	render() {
      return (
        <div>
          <Button 
            size="small" 
            color="secondary" 
            onClick={() => this.deleteRecord(this.props.id)}
          >
            Delete
          </Button>
        </div>
      );
  }
}

export default (DeleteRecord);