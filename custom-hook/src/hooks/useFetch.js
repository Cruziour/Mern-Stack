import {useState, useEffect, useCallback} from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        setError(null)
        setLoading(true)

        try {
            const response = await fetch(url)
            if(!response.ok){
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json()
            setData(data)
        }  catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
    }, [url])

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    
    return { data, loading, error };
}