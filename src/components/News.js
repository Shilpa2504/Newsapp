import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

import PropTypes from 'prop-types'
export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: "general"
    }

    static propsTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        console.log("hello i am a construtor from news component");
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults:0
        }
      

    }
    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b888214996184215b5ada7f31790f1be&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    async componentDidMount() {

        this.updateNews();
    }
    fetchMoreData =  async() => {
       
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b888214996184215b5ada7f31790f1be&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({ page: this.state.page + 1 });
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles:this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })

      };
    
    render() {
        return (
           <>
                <h2 className="text-center" style={{ margin: '75px 0px 20px'}}> NewsApp:Day-to-Day Updates -{this.props.category}</h2>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}
   
    hasMore={this.state.articles.length!==this.state.totalResults}
    loader={this.state.loading && <Spinner />}>
    <div className="container">
                <div className='row'>
                    { this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage}
                                newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                </div>
                </InfiniteScroll>
               
                </>
        )
    }
}
export default News