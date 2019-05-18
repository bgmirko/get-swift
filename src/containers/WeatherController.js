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
        this.props.onGetCurrentWeather(this.state.city);
    }
    
    getCityWeatherForUserSearch = (event) => {
        event.preventDefault();
        this.props.onGetCurrentWeather(this.state.city);
    }

    handleTextInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {

        const { currentWeather, dataLoading} = this.props;

        return (
            <Page>
                <CurrentWeatherPage 
                    currentWeather={currentWeather}
                    onCitySearchSubmit={this.getCityWeatherForUserSearch}
                    onTextInputChange={this.handleTextInputChange}
                    dataLoading={dataLoading}
                />
            </Page>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentWeather: state.weather.currentWeather,
        dataLoading: state.weather.dataLoading,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onGetCurrentWeather: (city) => dispatch(actions.getCurrentWeather(city))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherController);