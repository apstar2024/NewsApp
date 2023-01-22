import React, { Component } from "react";

export default class newsItem extends Component {
  render() {
    const { Title, descrpition, imgurl, newsUrl, author, publishedAt, source } =
      this.props;
    return (
      <div className="card">
      {/* //   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:1,left:'82%!Important'}}>
      //     {source}
      //     <span class="visually-hidden">unread messages</span>
      //   </span> */}
        <img src={imgurl} className="card-img-top" alt="/" />
        <div className="card-body">
          <h5
            className="card-title"
            style={{ color: "blue", fontWeight: "bolder", fontSize: "13px" }}
          >
            {Title}..
          </h5>
          <p className="card-text" style={{ marginBottom: "0.2rem" }}>
            {descrpition}...
          </p>
          <div style={{ fontSize: "9px", color: "darkgrey" }}>
            By: {author ? author : "unknown"} on:
            {new Date(publishedAt).toGMTString()}
          </div>
          <a
            href={newsUrl}
            className="btn btn-sm btn-primary"
            target={"_blank"}
          >
            ReadMore..
          </a>
        </div>
      </div>
    );
  }
}
