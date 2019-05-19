import React from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page';
import { withStyles } from '@material-ui/core/styles';
import weatherImage from '../assets/img/weather.png';
import { Typography } from '@material-ui/core';


const propTypes = {
    classes: PropTypes.object.isRequired
};


const styles = {
    pageWrap: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 160
    }
}

const startPage = (props) => {

    const { classes } = props;

    return (
        <Page>
            <div className={classes.pageWrap}>
                <Typography variant="h4" gutterBottom align="center">
                    Hello Weather
                </Typography>
                <img src={weatherImage} alt="app main" />
            </div>
        </Page>
    );
}

startPage.propTypes = propTypes;

export default withStyles(styles)(startPage);