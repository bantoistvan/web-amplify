import React, { Component, ChangeEvent } from 'react';
import { Paper, Typography, TextField, withStyles, Button, Icon } from '@material-ui/core';

const styles = {
    paper: {
        margin: 15,
        padding: 16,
        width: 400,
    },
    rightIcon: {
        marginLeft: 10,
      },
    button: {
        float: "right" as "right"
    }
};

type ContactUsState = {
    name: string;
    email: string;
    message: string;
}


class ContactUs extends Component<{ classes: any }, ContactUsState> {
    componentWillMount() {
        this.setState({});
    }

    setName(value: string) {
        console.log(value);
        this.setState({ "name": value });
    };

    setEmail(value: string) {
        console.log(value);
        this.setState({ "email": value });
    };

    setMessage(value: string) {
        console.log(value);
        this.setState({ "message": value });
    };

    render() {
        const classes = this.props.classes;

        return (
            <Paper className={classes.paper}>
                <Typography variant="h5" component="h2">
                    Message us
                </Typography>
                <TextField
                    id="outlined-name"
                    label="Name"
                    fullWidth
                    className={classes.textField}
                    value={this.state.name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => this.setName(e.target.value)}

                    margin="normal"
                />
                <TextField
                    id="outlined-email"
                    label="Email"
                    fullWidth
                    className={classes.textField}
                    value={this.state.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => this.setEmail(e.target.value)}

                    margin="normal"
                />

                <TextField
                    id="outlined-message"
                    label="Message"
                    className={classes.textField}
                    value={this.state.message}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => this.setMessage(e.target.value)}
                    multiline
                    fullWidth
                    rows="3"
                    rowsMax="3"
                    margin="normal"
                />

        <Button variant="contained" color="primary" className={classes.button}>
        Send
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>

            </Paper>
        );
    }
}

export default withStyles(styles)(ContactUs);
