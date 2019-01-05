import {fetchData} from '../services/api'

const queryString = (start, end) => `?start_date=${start}&end_date=${end}&api_key=`;

export function FetchDataDateRange(ticker, start, end) {
    return fetchData(ticker, queryString(start, end))
}