import axios from 'axios';

export function* getCurrentWeather(action){
    const cityName = 'Belgrade';
    const urlProxy = `https://cors-anywhere.herokuapp.com/`;
    const url = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ed7aeb32c44c8e78e7d7c6a9b5379906`
    try {
        const response = yield axios({
            method: 'get',
            url: `${urlProxy}${url}`
        });

        console.log(response);

    } catch (error) {
        console.log(error);
    }
}