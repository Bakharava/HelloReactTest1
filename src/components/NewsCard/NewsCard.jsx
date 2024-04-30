import {Button, ButtonDanger, NewsImage, NewsItemWrapper, NewsName} from "./styles";
import styled from "styled-components";
import image from '../../assets/images/news.jpg'

const NewsDescription = styled.div`
  font-size: 16px;
  color: aliceblue;
  height: 40px;
  overflow: hidden;
`
const NewsCard = ({newsItem}) => {

    return (
            <NewsItemWrapper>
                <NewsName name={newsItem.name} >{newsItem.name}</NewsName>
                {/*<NewsImage alt={newsItem.name} src={image} />*/}
                <NewsDescription>{newsItem.description}</NewsDescription>
                <div>{newsItem.url}</div>

                <Button>Press me</Button>
                <ButtonDanger>Don't Press me</ButtonDanger>
            </NewsItemWrapper>
    )
}

export default NewsCard;