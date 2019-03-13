import React, { Component } from 'react';
import logo from './vinyl-logo.svg';
import './App.css';

import EditRecord from './editRecord';
import EditForm from './Form/editForm';
import DeleteRecord from './deleteRecord';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import GridList from '@material-ui/core/GridList';

const styles = {
  card: {
    minWidth: 300,
    minHeight: 400,
    margin: 15,
  },
  media: {
    width:  240,
    height: 240,
    backgroundPosition: '50% 50%',
    backgroundRepeat:   'no-repeat',
    backgroundSize:     'cover',
  },
  center: {
    justifyContent: 'center',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    justifyContent: 'center',
    width: 'flex',
    height: 'flex',
  },
  form: {
    backgroundColor: 'white',
    padding: 15,
    margin: 40,
    display: 'inline',
  }
};

class App extends Component {

  state = {
    records: [],
      record: '',
      album: '',
      artist: '',
      date: '',
      imageUrl: ''
  }

  componentDidMount() {
    this.getRecords();   
  }

  getRecords = () => {
    console.log('getting record');
    // GET records call goes here
  }

  // handle changes in the form inputs
  handleChange = (event) => {
    console.log('handleChange', event.target.value);
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log('state', this.state);

    const { records, record, album, artist, date, imageUrl } = this.state;
    const newRecord = { record, album, artist, date, imageUrl };

    // POST records call goes here

    this.setState({
      records: [...records, newRecord],
        record: '',
        album: '',
        artist: '',
        date: '',
        imageUrl: ''
    });
  }

  render() {
    const { records } = this.state;
    const { classes } = this.props;

    const displayRecords = records.map((value, index) => 
      <Card className={classes.card} key={value.id}>
        <CardActionArea>
          <center>
            <CardMedia
              className={classes.media}
              image={value.imageUrl}
              title="Album Image"
            />
          </center>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {value.album}
            </Typography>
            <Typography component="p">
              {value.artist}
            </Typography>
            <Typography component="p">
              {value.date}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.center}>
          <EditRecord records={records} value={value} getRecords={this.getRecords}/>
          <DeleteRecord id={value.id}/>
        </CardActions>
      </Card>
    );
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Welcome to the Server-less Record Shop!</h3>
          <form className={classes.form} id="add-record" onSubmit={this.onSubmit}>
              <EditForm
                handleChange={this.handleChange}
                newRecord={this.state}
              />  
              <Button type="submit">
                Add Record
              </Button>
          </form> 
        </div>
        <div className={classes.root}>
          <GridList cellHeight={360} cols={4} className={classes.gridList}>
              {displayRecords}
          </GridList>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);