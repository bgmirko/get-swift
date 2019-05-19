import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, CircularProgress, Typography, TextField, Button } from '@material-ui/core';
import uwiImage from '../assets/img/uwindex-scale.png'


const propTypes = {
    classes: PropTypes.object.isRequired
};

const styles = {
    root: {
        padding: 140
    },
    allDataGroupsContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 30
    },
    dataGroupContainer: {
        width: 270,
        marginLeft: 20,
        marginRight: 20
    },
    list: {
        listStyleType: 'none',
        border: '1px solid #b0b4ba',
        padding: 10,
        '& li': {
            textAlign: 'left',
            paddingTop: 5,
            paddingButton: 5
        }
    },
    dataName: {
        display: 'inline-block',
        width: 150
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        paddingTop: 20
    },
    button: {
        marginLeft: 20
    },
    spinner: {
        marginTop: 80
    },
    formElement: {
        width: 60,
        margin: '0 10px 0 10px'
    },
    resultContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        fontSize: 60
    },
    image: {
        height: 300,
        marginLeft: 40
    }

}


const UWIndexPage = (props) => {

    const { classes, UWIndex, onTextInputChange, onUWIndexCoordinateSubmit, dataLoading } = props;

    let content = '';

    if (dataLoading) {

        content = <CircularProgress className={classes.spinner} />;

    } else {

        if (UWIndex) {
            content = (
                <React.Fragment>
                    <p>{UWIndex.value}</p>
                    <img src={uwiImage} alt="UW scale" className={classes.image}/>
                </React.Fragment>
            );
        } else {
            content = (
                <Typography variant="h6" gutterBottom align="center">
                    No data for searched location
                </Typography>
            )
        }
    }

    return (
        <Paper className={classes.root}>
            <Typography variant="h4" gutterBottom align="center">
                UW Index
            </Typography>
            <form method='POST' className={classes.form} onSubmit={onUWIndexCoordinateSubmit}>
                <TextField
                    id="lat"
                    label="Lat"
                    className={classes.formElement}
                    type="string"
                    name="lat"
                    autoComplete="true"
                    margin="normal"
                    variant="outlined"
                    value={props.lat}
                    onChange={onTextInputChange}
                />
                <TextField
                    id="lon"
                    label="Long"
                    className={classes.formElement}
                    type="string"
                    name="lon"
                    autoComplete="true"
                    margin="normal"
                    variant="outlined"
                    value={props.lon}
                    onChange={onTextInputChange}
                />
                <Button type="submit" variant="contained" color="primary" className={classes.button}>Search</Button>
            </form>
            <div className={classes.resultContainer}>
                {content}
            </div>
        </Paper>
    );
}

UWIndexPage.propTypes = propTypes;

export default withStyles(styles)(UWIndexPage);