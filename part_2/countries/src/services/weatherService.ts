import axios from 'axios'

const baseUrl = 'https://openweathermap.org';

async function weatherService(city: string) {
    try {
        const response = await axios.get(`${baseUrl}/data/2.5/weather?q=${city}`);
        return await response.data;
    } catch {
        return [];
    };
}

export default weatherService;