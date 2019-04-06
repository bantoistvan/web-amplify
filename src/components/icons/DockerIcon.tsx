import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const image = require('../../assets/icons/docker.png');

const styles = {
    icon: {
        width: 60
    }
};

class Icon extends Component<{ classes: any }> {
    
    render() {
        const classes = this.props.classes;

        return (<img className = {classes.icon}  src={image} alt="Docker"/>
        
        );
    }
}

export const DockerIcon = withStyles(styles)(Icon);
