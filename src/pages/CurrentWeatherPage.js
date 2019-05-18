import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import { Paper, CircularProgress, Typography, TextField, Button } from '@material-ui/core';


const propTypes = {
    classes: PropTypes.object.isRequired
};


const styles = {
    root: {
        padding: 40
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
        marginBottom: 20
    },
    button: {
        marginLeft: 20
    }

}


const currentWeatherPage = (props) => {

    const { classes, currentWeather, onTextInputChange, onCitySearchSubmit } = props;

    let content = <CircularProgress />;

    if (currentWeather) {

        content = (
            <React.Fragment>
                <Typography variant="h6" gutterBottom align="center">
                    {`Location: ${currentWeather.name}`}
                </Typography>
                <div className={classes.allDataGroupsContainer}>
                    <div className={classes.dataGroupContainer}>
                        <label>Main Weather Data</label>
                        <ul className={classes.list}>
                            <li><span className={classes.dataName}>Temperature: </span>{(currentWeather.main.temp - 272.15).toFixed(1) + ' ℃'}</li>
                            <li><span className={classes.dataName}>Temp Max: </span>{(currentWeather.main.temp_max - 272.15).toFixed(1) + ' ℃'}</li>
                            <li><span className={classes.dataName}>Temp Min: </span>{(currentWeather.main.temp_min - 272.15).toFixed(1) + ' ℃'}</li>
                            <li><span className={classes.dataName}>Humidity: </span>{currentWeather.main.humidity}</li>
                            <li><span className={classes.dataName}>Pressure: </span>{currentWeather.main.pressure}</li>
                        </ul>
                    </div>
                    <div className={classes.dataGroupContainer}>
                        <label>Wind</label>
                        <ul className={classes.list}>
                            <li><span className={classes.dataName}>Deg: </span>{currentWeather.wind.deg ? currentWeather.wind.deg : 'no data'}</li>
                            <li><span className={classes.dataName}>Speed: </span>{currentWeather.wind.speed}</li>
                        </ul>
                    </div>
                    <div className={classes.dataGroupContainer}>
                        <label>Other Data</label>
                        <ul className={classes.list}>
                            <li><span className={classes.dataName}>Clouds: </span>{currentWeather.clouds.all}</li>
                            <li><span className={classes.dataName}>Weather: </span>{currentWeather.weather[0].description}</li>
                            <li><span className={classes.dataName}>Sunrise: </span>{moment(currentWeather.sys.sunrise * 1000).format('LTS')}</li>
                            <li><span className={classes.dataName}>Sunset: </span>{moment(currentWeather.sys.sunset * 1000).format('LTS')}</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    return (
        <Paper className={classes.root}>
            <Typography variant="h4" gutterBottom align="center">
                Current Weather
            </Typography>
            <form method='POST' className={classes.form} onSubmit={onCitySearchSubmit}>
                        <TextField
                            id="city"
                            label="Change City"
                            className={classes.formElement}
                            type="string"
                            name="city"
                            autoComplete="true"
                            margin="normal"
                            variant="outlined"
                            onChange={onTextInputChange}
                        />
                        <Button type="submit" variant="contained" color="primary" className={classes.button}>Search</Button>
            </form>
            {content}
        </Paper>
    );
}

currentWeatherPage.propTypes = propTypes;

export default withStyles(styles)(currentWeatherPage);