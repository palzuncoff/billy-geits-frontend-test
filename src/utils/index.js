import api from '../services/api';
import Papa from 'papaparse';
import CSV from '../mocks/ticker-list';

const queryString = (start, end) => `?start_date=${start}&end_date=${end}&api_key=`;

export function FetchDataDateRange(ticker, start, end) {
    return api.fetchData(ticker, queryString(start, end))
}

export function getCompanies() {
    const options = Papa.parse(CSV).data;
    return options.reduce((acc, option, index, options) => {
        if (index === 0) return acc;
        const obj = {
            [options[0][0]]: option[0],
            [options[0][1]]: option[1],
            [options[0][2]]: option[2],
            [options[0][3]]: option[3],
            [options[0][4]]: option[4],
        };
        acc.push(obj);
        return acc
    }, []);
}