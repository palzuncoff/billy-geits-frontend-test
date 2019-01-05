import axios from 'axios';
import {EOD_API, API_KEY} from '../config';

function fetchData(ticker, queryStr) {
    return axios.get(
        EOD_API + ticker + queryStr + API_KEY
    );
}