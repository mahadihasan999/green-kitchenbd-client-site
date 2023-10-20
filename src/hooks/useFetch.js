import { useEffect, useState } from 'react';

const useFetch = () => {
    const [foods, setFoods] = useState([])


    useEffect(() => {
        fetch('https://res.awcbd.org/api/menus')
            .then(res => res.json())
            .then(data => setFoods(data.menus))
    }, [])
    return [foods, setFoods]
}

export default useFetch