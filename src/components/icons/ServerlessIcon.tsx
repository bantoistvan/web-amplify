import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const image = require('../../assets/icons/serverless.png');

const styles = {
    container: {
        overflow: "hidden",
        height: 60
    },
    icon: {
        width: 60,
    }
};

class Icon extends Component<{ classes: any }> {
    
    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.container}>
             <img className = {classes.icon}  src={image} alt="Serverless"/>
        </div>

        );
    }
}

export const ServerlessIcon = withStyles(styles)(Icon);