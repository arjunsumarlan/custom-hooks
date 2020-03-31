import { useEffect, useState } from 'react';

export default (endpoint) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(endpoint)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return {
        data,
        error,
        loading
    }
}