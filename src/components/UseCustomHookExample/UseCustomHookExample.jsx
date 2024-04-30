import {useEffect, useState} from "react";

export function useDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

function UseCustomHookExample()  {
    const [query, setQuery] = useState('a');
    const [newsList, setNewsList] = useState([]);

    const debouncedValue = useDebounce(query, 300)

    useEffect(() => {
        const newsUrl = `https://newsapi.org/v2/everything?q=${debouncedValue}&apiKey=${process.env.REACT_APP_API_KEY}`

        fetch(newsUrl).then(res => {
            return  res.json()
        }).then(data => {
            setNewsList(data.sources)
        })
    }, [debouncedValue])

    const handleChangeQuery = (e) => {
        setQuery(e.target.value)
    }

    return (
        <div> Custom hook
            <input type="text" value={query} onChange={handleChangeQuery} />

        </div>
    )
}

export default UseCustomHookExample;