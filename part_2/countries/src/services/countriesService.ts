import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all';

async function countriesService() {
    try {
        const response = await axios.get(baseUrl);
        return await response.data;
    } catch {
        return [];
    };
}

export default countriesService;