import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, CircularProgress, Typography, TextField, Button } from '@material-ui/core';
import SimpleSelect from '../components/UI/SimpleSelect';


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
        marginBottom: 20
    },
    button: {
        marginLeft: 20
    },
    spinner: {
        marginTop: 80
    },
    selectDateContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 30
    },
    message: {
        padding: 0,
        margin: 0,
        marginTop: 35,
        color: '#f44242'
    }

}


const forecastWeatherPage = (props) => {

    const { classes, selectedDateTimeWeather, onTextInputChange, onCitySearchSubmit, dataLoading, city } = props;

    let content = '';

    if (dataLoading || props.showSpinner) {

        content = <CircularProgress className={classes.spinner} />;

    } else {

        if (selectedDateTimeWeather) {

            content = (
                <React.Fragment>
                    <Typography variant="h6" gutterBottom align="center">
                        {`Location: ${city}`}
                    </Typography>
                    <div className={classes.allDataGroupsContainer}>
                        <div className={classes.dataGroupContainer}>
                            <label>Main Weather Data</label>
                            <ul className={classes.list}>
                                <li><span className={classes.dataName}>Temperature: </span>{(selectedDateTimeWeather.main.temp - 272.15).toFixed(1) + ' ℃'}</li>
                                <li><span className={classes.dataName}>Temp Max: </span>{(selectedDateTimeWeather.main.temp_max - 272.15).toFixed(1) + ' ℃'}</li>
                                <li><span className={classes.dataName}>Temp Min: </span>{(selectedDateTimeWeather.main.temp_min - 272.15).toFixed(1) + ' ℃'}</li>
                                <li><span className={classes.dataName}>Humidity: </span>{selectedDateTimeWeather.main.humidity}</li>
                                <li><span className={classes.dataName}>Pressure: </span>{selectedDateTimeWeather.main.pressure}</li>
                            </ul>
                        </div>
                        <div className={classes.dataGroupContainer}>
                            <label>Wind</label>
                            <ul className={classes.list}>
                                <li><span className={classes.dataName}>Deg: </span>{selectedDateTimeWeather.wind.deg ? selectedDateTimeWeather.wind.deg : 'no data'}</li>
                                <li><span className={classes.dataName}>Speed: </span>{selectedDateTimeWeather.wind.speed}</li>
                            </ul>
                        </div>
                        <div className={classes.dataGroupContainer}>
                            <label>Clouds</label>
                            <ul className={classes.list}>
                                <li><span className={classes.dataName}>Clouds: </span>{selectedDateTimeWeather.clouds.all}</li>
                                <li><span className={classes.dataName}>Weather: </span>{selectedDateTimeWeather.weather[0].description}</li>
                            </ul>
                        </div>
                    </div>
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
                5 Day Weather Forecast
            </Typography>
            <form method='POST' className={classes.form} onSubmit={onCitySearchSubmit}>
                <TextField
                    id="city"
                    label="Change City"
                    className={classes.formElement}
                    type="string"
                    name="cityFromInput"
                    autoComplete="true"
                    margin="normal"
                    variant="outlined"
                    onChange={onTextInputChange}
                />
                <Button type="submit" variant="contained" color="primary" className={classes.button}>Search</Button>
            </form>
            <p className={classes.message}>Please select different day or time</p>
            <div className={classes.selectDateContainer}>
                <SimpleSelect
                    type='day'
                    handleSelectChange={props.handleSelectChange}
                    menuItems={props.menuDays}
                    value={props.day}
                />
                <SimpleSelect
                    type='time'
                    handleSelectChange={props.handleSelectChange}
                    menuItems={props.menuTimes}
                    value={props.time}
                />
            </div>

            {content}

        </Paper>
    );
}

forecastWeatherPage.propTypes = propTypes;

export default withStyles(styles)(forecastWeatherPage);