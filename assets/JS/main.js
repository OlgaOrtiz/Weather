import { fetchCityByName } from "./requests";

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
    console.log('change of the search bar is triggered!');
    console.log(cityList);
})