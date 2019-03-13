import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class DeleteRecord extends Component {

    deleteRecord = (id) => {

        console.log('deleting Record: ', id);

        fetch("https://vv2qx5zqb7.execute-api.us-east-1.amazonaws.com/Dev", {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },    

          body: JSON.stringify({id: id})

        });  
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