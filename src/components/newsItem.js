import React, { Component } from "react";

export default class newsItem extends Component {
  render() {
    const {Title,descrpition,imgurl,newsUrl}=this.props;
    return (
      // <div className="card col" style={{ width: "18rem" }}>
      //   <img src="..." className="card-img-top" alt="/" />
      //   <div className="card-body">
      //     <p className="card-text">
      //       Some quick example text to build on the card title and make up the
      //       bulk of the card's content.
      //     </p>
      //   </div>
      // </div>
      <div className="card">
        <img src={imgurl} className="card-img-top" alt="/" />
        <div className="card-body">
          <h5 className="card-title" style={{color:"blue",fontWeight:"bolder",fontSize:"13px"}}>{Title}..</h5>
          <p className="card-text">
            {descrpition}...
          </p>
          <a href={newsUrl} className="btn btn-sm btn-primary" target={'_blank'}>
            ReadMore..
          </a>
        </div>
      </div>
    );
  }
}
