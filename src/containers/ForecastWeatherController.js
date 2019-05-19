import React, { Component } from 'react';
import Page from '../components/Page';
import moment from 'moment';
import { connect } from 'react-redux';
import ForecastWeatherPage from '../pages/ForecastWeatherPage';

import * as actions from '../store/actions';


class ForecastWeatherController extends Component {

    state = {
        city: 'Belgrade',
        cityFromInput: '',
        waitingForWeatherData: false,
        forecastWeatherFormated: null,
        day: 0,
        time: 0,
        days: [],
        timesOfSelectedDay: [],
        synchroDataLoading: false
    }

    componentDidMount() {
        this.setState({ waitingForWeatherData: true });
        this.props.onGetForecastWeather(this.state.city);
    }

    componentDidUpdate() {

        const { dataLoading, forecastWeather } = this.props;

        // after fetching forecast weather data
        if (!dataLoading && this.state.waitingForWeatherData && forecastWeather) {

            const city = forecastWeather.city.name;
        
            let forecastWeatherFormated = [];
            let dayForecast = [];
            let day = new Date(forecastWeather.list[0].dt * 1000).getDate();

            // format forecast weather data 
            // array [dayOneArray[timeOneObject, timeTwoObject, time3Object],
            //        dayTwoArray[timeOneObject, timeTwoObject, time3Object],
            //        dayThreeArray[timeOneObject, timeTwoObject, time3Object]]            
            for (let key in forecastWeather.list) {

                if (new Date(forecastWeather.list[key].dt * 1000).getDate() !== day) {
                    // new day
                    day = new Date(forecastWeather.list[key].dt * 1000).getDate();
                    forecastWeatherFormated.push(dayForecast);
                    dayForecast = [];
                    dayForecast.push(forecastWeather.list[key]);
                } else {
                    //same day
                    dayForecast.push(forecastWeather.list[key]);
                }
            }

            const { days, timesOfSelectedDay } = this.getForecastDaysAndDayTimes(forecastWeatherFormated);

            this.setState({
                city: city,
                forecastWeatherFormated: forecastWeatherFormated,
                waitingForWeatherData: false,
                days: days,
                timesOfSelectedDay: timesOfSelectedDay
            });
        } 
        // If city search doesn't exist
        else if(!dataLoading && this.state.waitingForWeatherData && !forecastWeather) {
            this.setState({
                forecastWeatherFormated: null,
                waitingForWeatherData: false,
            });
        }
    }

    // submit search input city and get data from weather backend end point
    getCityWeatherForUserSearch = (event) => {
        event.preventDefault();
        this.setState({ waitingForWeatherData: true });
        this.props.onGetForecastWeather(this.state.cityFromInput);
    }

    // handle search input city change
    handleTextInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // handle date or time select input change
    handleSelectChange = event => {

        this.setState({ synchroDataLoading: true })

        setTimeout(() => {

            if (event.target.name === 'day') {
                let timesOfSelectedDay = this.findTimesForSelectedDay(event.target.value, this.state.forecastWeatherFormated);
                const haveSelectedTime = timesOfSelectedDay.includes(this.state.timesOfSelectedDay[this.state.time]);
                if (haveSelectedTime) {
                    const index = timesOfSelectedDay.indexOf(this.state.timesOfSelectedDay[this.state.time]);
                    this.setState({ [event.target.name]: event.target.value, timesOfSelectedDay: timesOfSelectedDay, time: index, synchroDataLoading: false });
                } else {
                    this.setState({ [event.target.name]: event.target.value, timesOfSelectedDay: timesOfSelectedDay, time: 0, synchroDataLoading: false });
                }

            } else {
                this.setState({ [event.target.name]: event.target.value, synchroDataLoading: false });
            }

        }, 600)


    };


    // get days and times for two select input fields 
    getForecastDaysAndDayTimes = (forecastWeatherFormated) => {
        let days = [];
        for (let key in forecastWeatherFormated) {
            days.push(moment(forecastWeatherFormated[key][0].dt * 1000).format("MMM Do"));
        }

        let timesOfSelectedDay = this.findTimesForSelectedDay(this.state.day, forecastWeatherFormated);

        return { days: days, timesOfSelectedDay: timesOfSelectedDay }
    }

    // find array of times for selected input day change
    findTimesForSelectedDay = (day, forecastWeatherFormated) => {
        let timesOfSelectedDay = [];
        for (let key in forecastWeatherFormated[day]) {
            timesOfSelectedDay.push(moment(forecastWeatherFormated[day][key].dt * 1000).format("h:mm a"));
        }
        return timesOfSelectedDay;
    }


    render() {

        const { dataLoading } = this.props;
        const { forecastWeatherFormated, day, time, city } = this.state;

        return (
            <Page>
                <ForecastWeatherPage
                    city={city}
                    selectedDateTimeWeather={forecastWeatherFormated ? forecastWeatherFormated[day][time] : null}
                    onCitySearchSubmit={this.getCityWeatherForUserSearch}
                    onTextInputChange={this.handleTextInputChange}
                    dataLoading={dataLoading}
                    handleSelectChange={this.handleSelectChange}
                    menuDays={this.state.days}
                    menuTimes={this.state.timesOfSelectedDay}
                    day={this.state.day}
                    time={this.state.time}
                    showSpinner={this.state.synchroDataLoading}
                />
            </Page>
        );
    }
}

const mapStateToProps = state => {
    return {
        forecastWeather: state.weather.forecastWeather,
        dataLoading: state.weather.dataLoading,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onGetForecastWeather: (city) => dispatch(actions.getForecastWeather(city))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ForecastWeatherController);