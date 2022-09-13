import { Container } from "@mui/material";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css";
const NewsContent = ({ newsArray, newsResults, loadMore, setLoadMore }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use Tik news app on your smartphone
          </span>
          <img src="/images/appstore.png" height="80%" alt="Appstore"></img>
          <img src="/images/playstore.png" height="80%" alt="Playstore"></img>
          <img></img>
        </div>

        {newsArray.map((newsItem) => {
          return <NewsCard newsItem={newsItem} key={newsItem.title} />;
        })}
          <hr></hr>
          {(loadMore<=newsResults)?<button className="loadMore" onClick={()=>setLoadMore(loadMore+20)}>Load More</button>:<></>}
      </div>
    </Container>
  );
};

export default NewsContent;
