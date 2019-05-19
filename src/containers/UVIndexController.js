import React, { Component } from 'react';
import Page from '../components/Page';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import UWIndexPage from '../pages/UWIndexPage';


class UWIndexController extends Component {

    state = {
        lat: '44.787197', // default location Belgrade
        lon: '20.457273'
    }

    componentDidMount(){
     console.log('[UWIndex] component did mount');
     this.props.onGetUWIndex(this.state.lat, this.state.lon);
    }
    
    UWIndexCoordinateSubmit = (event) => {
        event.preventDefault();
        this.props.onGetUWIndex(this.state.lat, this.state.lon);
    }

    handleTextInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {

        const { UWIndex, dataLoading } = this.props;

        return (
            <Page>
                <UWIndexPage 
                    UWIndex={UWIndex}
                    onUWIndexCoordinateSubmit={this.UWIndexCoordinateSubmit}
                    onTextInputChange={this.handleTextInputChange}
                    dataLoading={dataLoading}
                />
            </Page>
        );
    }
}

const mapStateToProps = state => {
    return {
        UWIndex: state.weather.UWIndex,
        dataLoading: state.weather.dataLoading,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUWIndex: (lat, lon) => dispatch(actions.getUWIndex(lat, lon))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UWIndexController);