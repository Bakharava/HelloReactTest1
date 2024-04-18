import {useCallback, useEffect, useMemo, useState} from "react";
import {NewsSection} from "../NewsSection";

function UseCallbackExample()  {
    const [amountOfClicks, setAmountOfClicks] = useState(1);
    const [isBlockVisible, setIsBlockVisible] = useState(false);

    const handleAddClick = () => {
        setAmountOfClicks((prevAmount) => {
            return prevAmount + 1
        })
    }

    const getNews = useCallback(async  () => {
        const newsUrl = `https://newsapi.org/v2/top-headlines/sources?&apiKey=${process.env.REACT_APP_API_KEY}`

        const response = await fetch(newsUrl)
        const data = await response.json();
        data.sources.length = amountOfClicks
        return data.sources
    }, [amountOfClicks])

    const handleShowBlock = () => {
        setIsBlockVisible(!isBlockVisible)
    }

    return (
        <div>
            <button onClick={handleAddClick}>Add Click</button>
            <h1>Amount of clicks: {amountOfClicks}</h1>

            <NewsSection getNews={getNews} />
            <button onClick={handleShowBlock}>Show block</button>
            {isBlockVisible && <div>Block to show</div>}
        </div>
    )
}

export default UseCallbackExample;