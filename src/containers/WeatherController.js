import React, { Component } from 'react';
import Page from '../components/Page';
import { connect } from 'react-redux';
import CurrentWeatherPage from '../pages/CurrentWeatherPage';

import * as actions from '../store/actions';


class WeatherController extends Component {

    state = {
        city: 'Belgrade'
    }

    componentDidMount(){
        console.log("[WeatherController] component did mount");
        this.props.onGetCurrentWeather(this.state.city);
    }
    
    getCityWeatherForUserSearch = (event) => {
        event.preventDefault();
        console.log("city search");
        this.props.onGetCurrentWeather(this.state.city);
    }

    handleTextInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {

        const { currentWeather } = this.props;

        return (
            <Page>
                <CurrentWeatherPage 
                    currentWeather={currentWeather}
                    onCitySearchSubmit={this.getCityWeatherForUserSearch}
                    onTextInputChange={this.handleTextInputChange}
                />
            </Page>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentWeather: state.weather.currentWeather
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onGetCurrentWeather: (city) => dispatch(actions.getCurrentWeather(city))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherController);