import axios from 'axios';
import { ROOT_API, API_KEY, QUERY_STR } from '../config';

function fetchData(ticker) {
    return axios.get(
        ROOT_API + ticker + QUERY_STR + API_KEY
    );
}