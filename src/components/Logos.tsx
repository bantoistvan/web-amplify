import React, { Component, ChangeEvent } from 'react';
import { Paper, Typography, TextField, withStyles, Button, Icon, Grid } from '@material-ui/core';
import { DockerIcon, NodeJsIcon, KubernetesIcon, ReactIcon, DotNetCoreIcon, ServerlessIcon, AwsIcon, TsIcon, CypressIcon } from './icons';
import { JavaScriptIcon } from './icons/JavaScriptIcon';



const styles = {
    paper: {
        margin: 15,
        padding: 16,
        width: 400,
    },
    iconTable: {
        border: '2px solid white'
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
                        <td className={classes.iconTable}><NodeJsIcon /></td>
                        <td className={classes.iconTable}><KubernetesIcon /></td>
                        <td className={classes.iconTable}><ReactIcon /></td>
                        <td className={classes.iconTable}><DotNetCoreIcon /></td>
                    </tr>
                    <tr>
                        <td className={classes.iconTable}><JavaScriptIcon /></td>
                        <td className={classes.iconTable}><ServerlessIcon /></td>
                        <td className={classes.iconTable}><AwsIcon /></td>
                        <td className={classes.iconTable}><TsIcon /></td>
                        <td className={classes.iconTable}><CypressIcon /></td>
                    </tr>
                </table></Paper>

        );
    }
}

export const LogoComponent = withStyles(styles)(Logos);
