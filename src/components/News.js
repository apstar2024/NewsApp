import React, { Component} from "react";
import Loading from "./Loading";
import Newsitem from "./newsItem";
import PropTypes from 'prop-types'


export default class News extends Component {  
  static defaultProps = {
    category: 'General',
    pageSize:8,
    country:'in',
    title:'Star News'
  }
  static propTypes = {
    category: PropTypes.string,
    pageSize:PropTypes.number,
    country:PropTypes.string
  };
  constructor(props) {
    super(props);
    // console.log("this is constructor from news component");
    this.state = {
      articles: [],
      loading: true,
      pageno:1,
      totalpage:2,
    };
    document.title=`${this.props.category}- News`;
  }
  goBack=async()=>{
    console.log('going back');
    this.setState({loading:true})
    this.setState({pageno:this.state.pageno-1});
    let urlapi=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.pageno}&apiKey=ab58b0a06436481dbac3e440f44ef8af`;
    let data=await fetch(urlapi);
    let usabledata=await data.json();
    this.setState({articles:usabledata.articles,loading:false})
  }
  goNext=async()=>{
    console.log('going next');
    this.setState({loading:true})
    this.setState({pageno:this.state.pageno+1});
    let urlapi=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.pageno}&apiKey=ab58b0a06436481dbac3e440f44ef8af`;
    let data=await fetch(urlapi);
    let usabledata=await data.json();
    this.setState({articles:usabledata.articles,loading:false})
  }
  async componentDidMount(){
    this.setState({loading:true})
    let urlapi=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.pageno}&apiKey=ab58b0a06436481dbac3e440f44ef8af`;
    let data=await fetch(urlapi);
    let usabledata=await data.json();
    this.setState({articles:usabledata.articles,loading:false})
    this.setState({totalpage:Math.ceil(usabledata.totalResults/this.props.pageSize)})
  }
  render() {
    return (
      <>
      {this.state.loading &&<Loading/>}
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-3">
          {this.state.loading===false && this.state.articles.map((element) => {
            return (
              <div className="col" key={element.url}>
                <Newsitem
                  Title={element.title?element.title.slice(0,35):" "}
                  descrpition={element.content?element.content.slice(0,80):""}
                  imgurl={element.urlToImage?element.urlToImage:"./unavailable.jpg"}
                  newsUrl={element.url}
                  author={element.author}
                  publishedAt={element.author}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
            {this.state.loading===false && <div className="container d-flex justify-content-between my-2">
              <button type="button" disabled={this.state.pageno===1} className="btn btn-primary" onClick={this.goBack}>Previous</button>
              <button type="button" disabled={this.state.totalpage===this.state.pageno} className="btn btn-primary" onClick={this.goNext}>Next</button>
           </div>}
      </div>
      </>
    );
  }
}
