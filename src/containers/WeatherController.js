import React, { Component } from 'react';
import Page from '../components/Page';
import { connect } from 'react-redux';

import * as actions from '../store/actions';


class WeatherController extends Component {


    componentDidMount(){
        console.log("[WeatherController] component did mount");
        this.props.onGetCurrentWeather();
    }

    render() {

        return (
            <Page>
                <p>Hello world</p>
            </Page>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onGetCurrentWeather: () => dispatch(actions.getCurrentWeather())
    }
}


export default connect(null, mapDispatchToProps)(WeatherController);