export function getCityByDetails(cityStr, cityList) {
    return cityList.find((city) => cityStr === `${city.name}, ${city.state}, ${city.country}`);
}