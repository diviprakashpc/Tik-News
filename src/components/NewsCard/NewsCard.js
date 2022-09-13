import React from "react";
import "./NewsCard.css"
const NewsCard = ({ newsItem }) => {

    const fullDate = new Date(newsItem.publishedAt);
    var date = fullDate.toString().split(" ");
    const hour = parseInt(date[4].substring(0,2));
    const time = hour >12 ? true : false;
  return (
    <div className="newsCard">
      <img
        alt={newsItem.title}
        src={newsItem.urlToImage ? newsItem.urlToImage : "/images/default.jpg"}
        className="newsImage"
      />
      <div className="newsText">
        <div>
          <span className="title">{newsItem.title}</span>
          <br></br>
          <span className="author">
            <a href={newsItem.url} target='__blank' >
              <b>short </b>
            </a>
           
            <span className="muted">
            by {newsItem.author ? newsItem.author : "unknown"} / {" "}
            {
                time?`${hour-12}:${date[4].substring(3,5)} PM`:
                `${hour}:${date[4].substring(3,5)} AM`} {" "}
                on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
          </span>
        <div className="lowerNewsText">
        <div className="description">{newsItem.description}</div>
        <span className="readmore">
            Readmore at {" "} 
            <a href={newsItem.url} target="__blank">
                <b>{ newsItem.source.name}</b>
            </a>
        </span>

        </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
