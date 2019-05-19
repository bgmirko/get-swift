import React, { Component } from 'react';
import Page from '../components/Page';
import { connect } from 'react-redux';
import CurrentWeatherPage from '../pages/CurrentWeatherPage';

import * as actions from '../store/actions';


class WeatherController extends Component {

    state = {
        city: 'Belgrade',
        zip: ''
    }

    componentDidMount(){
        const searchParams = {
            city : this.state.city,
            zip : this.state.zip
        }
        this.props.onGetCurrentWeather(searchParams);
    }
    
    getCityWeatherForUserSearch = (event) => {
        event.preventDefault();
        const searchParams = {
            city : this.state.city,
            zip : this.state.zip
        }
        this.props.onGetCurrentWeather(searchParams);
    }

    handleTextInputChange = (event) => {
        if(event.target.name === 'city'){
            this.setState({city : event.target.value, zip: ''});
        }else if(event.target.name === 'zip'){
            this.setState({city : '', zip: event.target.value});
        }
    }

    render() {

        const { currentWeather, dataLoading } = this.props;

        return (
            <Page>
                <CurrentWeatherPage 
                    currentWeather={currentWeather}
                    onCitySearchSubmit={this.getCityWeatherForUserSearch}
                    onTextInputChange={this.handleTextInputChange}
                    dataLoading={dataLoading}
                    city={this.state.city}
                    zip={this.state.zip}
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
        onGetCurrentWeather: (searchParams) => dispatch(actions.getCurrentWeather(searchParams))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherController);