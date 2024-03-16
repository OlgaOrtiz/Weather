import { fetchCityByName } from "./requests";
import {getCityByDetails} from "./search.js";

const citySearchbar = document.querySelector('#city-searchbar');
const cityOptions = document.querySelector('#city-options')
const searchButton = document.querySelector('#city-search-button');
let cityList = [];

searchButton.addEventListener('click', async () => {
    //cityList = [];
    //cityOptions.innerHTML = '';
    const cityName = citySearchbar.value;
    if (cityName) {
        const cityObjs = await fetchCityByName(cityName);
        cityObjs.forEach((cityObj) => {
            cityList.push(cityObj);
            const cityOptionValue = cityObj.state ? `${cityObj.name}, ${cityObj.state}, ${cityObj.country}` : `${cityObj.name}, ${cityObj.country}`;
            const cityOption = `<option value="${cityOptionValue}">`;
            cityOptions.insertAdjacentHTML('beforeend', cityOption);
        });
        console.log(cityObjs);
    }
});

citySearchbar.addEventListener('change', () => {
    const foundCity = getCityByDetails(citySearchbar.value, cityList);
    if (foundCity) {
        //todo: we need to get the foundCity's coordinate and get the weather information so we can generate the overview card of the weather
        //todo: step 1 call the weather API using foundCity's latitude and longitude
        //todo: step 2 handle the response from the server (successful or failed)
        //todo: step 3 generate the overview card of the weather
    }

});