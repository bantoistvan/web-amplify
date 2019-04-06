import React, { Component, ChangeEvent } from 'react';
import { Paper, Typography, TextField, withStyles, Button, Icon, Grid } from '@material-ui/core';
import { DockerIcon } from './icons';

const styles = {
    paper: {
        margin: 15,
        padding: 16,
        width: 400,
    },
    iconTable: {
        border: '2px solid red'
    }

};


class Logos extends Component<{ classes: any }> {

    render() {
        const classes = this.props.classes;

        return (    
            <Paper className={classes.paper}>
                <Typography variant="h5" component="h2">
                    Icons
                </Typography>
                <table>
                    <tr>
                        <td className={classes.iconTable}><DockerIcon /></td>
                        <td className={classes.iconTable}><DockerIcon /></td>
                        <td className={classes.iconTable}><DockerIcon /></td>
                        <td className={classes.iconTable}><DockerIcon /></td>
                        <td className={classes.iconTable}><DockerIcon /></td>
                    </tr>
                    <tr>
                        <td className={classes.iconTable}><DockerIcon /></td>
                        <td className={classes.iconTable}><DockerIcon /></td>
                        <td className={classes.iconTable}><DockerIcon /></td>
                        <td className={classes.iconTable}><DockerIcon /></td>
                        <td className={classes.iconTable}><DockerIcon /></td>
                    </tr>
                </table></Paper>

        );
    }
}

export const LogoComponent = withStyles(styles)(Logos);
