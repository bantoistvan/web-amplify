import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PageLayout from './components/PageLayout';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';


const styles = {
  root: {
    flexGrow: 1,
    padding: 24,
  },
  paper: {
    margin: 15,
    padding: 16,
    width: 400,
  }
};


class App extends Component<{ classes: any }> {
  render() {

    const { classes } = this.props;

    return (
      <div className="App">
        <PageLayout isDark={true} >
          <div className="Home-header">

            <div className="Menu">
              <img src={logo} className="App-logo" alt="logo" />
            </div>

            <div className="Content">
              <h1>Your vision<br />Our Solution</h1>
              <div className="Divider"> </div>
              <p>We are going to help you and your business to change for the better.</p>
              <p>We are offering IT and API solutions.</p>
              <p>Get know more, contact us!</p>
            </div>

          </div>
        </PageLayout>

        <PageLayout isDark={true}>

          <Grid container justify="center" spacing={16} className={classes.root}>
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h2">
                Contact us
                </Typography>


              <Typography component="p">
                Don't be shy! Drop us an e-mail and say Hello!
                  </Typography>


              <Typography component="p">
                <p>e-mail</p>
                <p>twitter</p>
                <p>github</p>
                <p>linkedin</p>
              </Typography>
            </Paper>
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h2">
                Message us
              </Typography>
              <Typography>
                <form>

                  <TextField
                    id="outlined-name"
                    label="Name"
                    className={classes.textField}
                    value="Istvan"
                    onChange={() => { }}
                    margin="normal"
                  />
                  <p><label>Your email: <input id="email" /></label></p>

                  <label>Message: <textarea id="email" /></label>

                </form>
              </Typography>
            </Paper>
          </Grid>
          <div className="footer">
            <p>ZED VISION 2019</p>

          </div>
        </PageLayout>
      </div>
    );
  }
}

export default withStyles(styles)(App);
