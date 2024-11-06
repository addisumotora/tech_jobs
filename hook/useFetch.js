import { RAPID_API_KEY } from '@env';
import axios from 'axios';
import { useEffect, useState } from 'react';

const rapid_api_key = RAPID_API_KEY;

const useFetch = ({ endpoint, query }) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState()
  const [ data, setData ] = useState([])
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": rapid_api_key,
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    qs: {
     ...query
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
        const response  = await axios.request(options);
        setData( response.data.data )
        setIsLoading(false)
    } catch (error) {
       setError(error)
       alert('There is an error')
    } finally {
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
    },[])

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, error, isLoading, refetch}
  }
};

export default useFetch;