import React from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page';
import { withStyles } from '@material-ui/core/styles';


const propTypes = {
    classes: PropTypes.object.isRequired
};


const styles = {
}

const startPage = (props) => {
    return (
        <Page>
            <p>Start Page</p>
        </Page>
    );
}

startPage.propTypes = propTypes;

export default withStyles(styles)(startPage);