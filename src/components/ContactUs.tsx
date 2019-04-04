import React, { Component, ChangeEvent } from 'react';
import classNames from 'classnames';
import { Paper, Typography, TextField, withStyles } from '@material-ui/core';


const styles = {
    paper: {
        margin: 15,
        padding: 16,
        width: 400,
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
                <Typography>

                    <TextField
                        id="outlined-name"
                        label="Name"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => this.setName(e.target.value)}

                        margin="normal"
                    /><br />
                    <TextField
                        id="outlined-email"
                        label="Email"
                        className={classes.textField}
                        value={this.state.email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => this.setEmail(e.target.value)}

                        margin="normal"
                    /><br />

                    <TextField
                        id="outlined-message"
                        label="Message"
                        className={classes.textField}
                        value={this.state.message}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => this.setMessage(e.target.value)}
                        multiline
                        fullWidth
                        rowsMax="4"
                        margin="normal"
                    />

                </Typography>
            </Paper>
        );
    }
}

export default withStyles(styles)(ContactUs);
