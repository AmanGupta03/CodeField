import axios from 'axios';

const api_endpoint = 'https://api.codechef.com';

const fetchData = (token, path) => {
    path = api_endpoint + path;
    const response = axios.get(path, {
        headers: {
          Authorization: 'Bearer ' + token
        }
    })
    console.log(response.status);
    return response.status;
};

export default fetchData;

// 27503

// curl -H "Authorization: Bearer <ACCESS_TOKEN>" http://www.example.com