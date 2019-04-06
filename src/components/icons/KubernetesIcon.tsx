import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const image = require('../../assets/icons/kubernetes-trans.png');

const styles = {
    icon: {
        width: 60
    }
};

class Icon extends Component<{ classes: any }> {
    
    render() {
        const classes = this.props.classes;

        return (<img className = {classes.icon}  src={image} alt="Kubernetes"/>
        
        );
    }
}

export const KubernetesIcon = withStyles(styles)(Icon);
