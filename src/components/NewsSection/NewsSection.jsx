import {NewsCategories} from "../../constants";
import {useEffect, useState} from "react";
import './NewsSectionStyles.css'
import {NewsCard} from "../NewsCard";

const NewsSection = ({getNews}) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const newNews = await getNews()
            setNews(newNews)
        }

        fetchData();

    }, [getNews])
    const wrapperStyles = {width: '80%', margin: '0 auto', padding: '48px', fontWeight: 700}

    return (
        <div className='news-section'>{NewsCategories.Sports}
            {/*{news.length && news.map(news => <div key={news.name}>{news.description}</div>)}*/}
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {news.length && news.map(news => <div key={news.name}>
                    {<NewsCard newsItem={news} />}
                </div>)}
        </div>
        </div>

    )
}

export default NewsSection;