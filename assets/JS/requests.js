
export async function fetchCityByName(cityName) {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/geocoding?city=${cityName}`, {
            method: 'GET',
            headers: { 'X-Api-Key': 'lzNgg8Y1J/VdDCEQSU5B+Q==36q9kEDVJzION2Qa' },
            contentType: 'application/json',
        });
        return response.json();
    } catch (error) {
        console.log('fetch city information is failed! check the reason:', error);
    }

}