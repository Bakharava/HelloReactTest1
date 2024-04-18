import {NewsCategories} from "../../constants";
import {useEffect, useState} from "react";

const NewsSection = ({getNews}) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const newNews = await getNews()
            setNews(newNews)
        }

        fetchData();

    }, [getNews])

    return (
        <div style={{width: '80%', margin: '0 auto', padding: '48px'}}>{NewsCategories.Sports}
            {news.length && news.map(news => <div key={news.name}>{news.description}</div>)}
        </div>

    )
}

export default NewsSection;