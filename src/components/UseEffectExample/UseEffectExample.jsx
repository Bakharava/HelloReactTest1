import {useEffect, useState} from "react";
import {NewsCategories} from "../../constants";
import {NewsSection} from "../NewsSection";
const UseEffectExample = () => {
const [sectionType, setSectionType] = useState(NewsCategories.Sports);
const [position, setPosition] = useState({x:0, y: 0});
const [newsList, setNewsList] = useState([]);

useEffect(() => {
    const newsUrl = `https://newsapi.org/v2/top-headlines/sources?category=${sectionType}&apiKey=${process.env.REACT_APP_API_KEY}`

    fetch(newsUrl).then(res => {
        return  res.json()
    }).then(data => {
        setNewsList(data.sources)
    })
}, [sectionType])

    const mouseMoveHandler = (event) => {
            setPosition({x: event.clientX, y: event.clientY})

    }

    // useEffect(() => {
    //     window.addEventListener('mousemove', mouseMoveHandler)
    //     return () => {
    //         window.removeEventListener('mousemove', mouseMoveHandler)
    //     }
    // }, [])

    return (
        <div>
            <button onClick={() => setSectionType('sports')}>Sports</button>
            <button onClick={() => setSectionType('health')}>Health</button>
            <button onClick={() => setSectionType('science')}>Science</button>
            <button onClick={() => setSectionType('technology')}>technology</button>
            <h1>{sectionType}</h1>

            <div>{JSON.stringify(position)}</div>
            <NewsSection news={newsList} />
        </div>

    )
}

export default UseEffectExample;