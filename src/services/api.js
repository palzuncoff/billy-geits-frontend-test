import axios from 'axios';
import {EOD_API, API_KEY} from '../config';

class ApiService {
    fetchData = (ticker, queryStr) => axios.get(
        EOD_API + ticker + queryStr + API_KEY
    );
    getTickerListCSV = () => axios.get(
        'https://s3.amazonaws.com/quandl-production-static/end_of_day_us_stocks/ticker_list.csv'
    );
}

export default new ApiService()