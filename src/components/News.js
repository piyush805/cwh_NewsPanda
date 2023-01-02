// News Component: shows fetched news items in page by a for loop for all news item and render a news item component by passing respective data to it.
import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        // Here it capitalises the category first letter to be shown in Title as user switches throught diff categories
        return string[0].toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        // Function loads 1st page news items; later fetchMore() does the job
        props.setProgress(10);//initial progress
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&&pageSize=${props.pageSize}`;
        setLoading({ loading: true });
        let data = await fetch(url); 
        props.setProgress(30);//random progress
        let parsedData = await data.json();
        props.setProgress(60);//random progress
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);//when all fetch done
    }

    // In place of componentDidMount
    // function runs once, NOT related to some special event so empty array in place of [input] passed
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsPanda`;
        updateNews();
        // eslint-disable-next-line
    }, [])

    // Function to concatenate next page items below current one and function has been passed to Infinite Scroll, 
    const fetchMore = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&&pageSize=${props.pageSize}`;
        // setPage is async so we have to write in url mannually page +1
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }
    // Functions were being used for previous and next buttons but now we have infinite scroll until news items exhaust
    // const handleNextClick = async () => {
    //     // Not being used, we have infinite scroll
    //     setPage(page + 1);
    //     updateNews();
    // }

    // const handlePrevClick = async () => {
    //     // Not being used, we have infinite scroll
    //     setPage(page - 1);
    //     updateNews();
    // }
    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsPanda - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMore}
                hasMore={articles.length !== totalResults}
                loader={<Spinner/>}
            > 
                <div className='container'>
                    <div className="row">
                        {/* For Each new item render NewsItem Component */}
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={element.title ? element.title.slice(0, 40) : ""}
                                    description={element.description ? element.description.slice(0, 130) : ""}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    // apiKey: PropTypes.string
}

export default News;

/************************CLASS BASED COMPONENT CODE*************************/

// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner'
// import { PropTypes } from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroll-component';

// export default class News extends Component {
//     static defaultProps = {
//         country: 'in',
//         pageSize: 6,
//         category: 'general'
//     }
//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string,
//         apiKey: PropTypes.string
//     }
//     capitalizeFirstLetter = (string) => {
//         return string[0].toUpperCase() + string.slice(1);
//     }
//     constructor(props) {
//         super(props);
//         this.state = {
//             articles: [],
//             loading: false,
//             page: 1,
//             totalResults: 0
//         }
//         document.title = `${this.capitalizeFirstLetter(this.props.catergory)}-NewsPanda`;
//     }
//     async updateNews() {
//         this.props.setProgress(10);//initial progress
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&&pageSize=${this.props.pageSize}`;
//         this.setState({ loading: true })
//         let data = await fetch(url);
//         this.props.setProgress(30);//random progress
//         let parsedData = await data.json();
//         this.props.setProgress(60);//random progress
//         this.setState({
//             articles: parsedData.articles,
//             totalResults: parsedData.totalResults,
//             loading: false
//         })
//         this.props.setProgress(100);//when all fetch done
//     }
//     async componentDidMount() {
//         this.updateNews();
//     }
//     handleNextClick = async () => {
//         // if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
//         //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b61354cb6f294bc7aa0a234d31f2e906&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//         //     this.setState({ loading: true })
//         //     let data = await fetch(url);
//         //     let parsedData = await data.json();

//         //     this.setState({
//         //         page: this.state.page + 1,
//         //         articles: parsedData.articles,
//         //         loading: false
//         //     })
//         // }
//         this.setState({ page: this.state.page + 1 })
//         this.updateNews();
//     }
//     handlePrevClick = async () => {
//         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b61354cb6f294bc7aa0a234d31f2e906&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//         // this.setState({ loading: true })
//         // let data = await fetch(url);
//         // let parsedData = await data.json();

//         // this.setState({
//         //     page: this.state.page - 1,
//         //     articles: parsedData.articles,
//         //     loading: false
//         // })
//         this.setState({ page: this.state.page - 1 })
//         this.updateNews();
//     }

//     fetchMore = async () => {
//         this.setState({ page: this.state.page + 1 })
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${page+1}&&pageSize=${this.props.pageSize}`;
//         // this.setState({ loading: true })
//         let data = await fetch(url);

//         let parsedData = await data.json();
//         console.log(parsedData);
//         this.setState({
//             articles: this.state.articles.concat(parsedData.articles),
//             totalResults: parsedData.totalResults,
//             loading: false
//         })
//     }
//     render() {
//         return (
//             <>
//                 <h2 className='text-center'>News Moneky Top headlines from {this.capitalizeFirstLetter(this.props.catergory)}</h2>
//                 {this.state.loading && <Spinner />}
//                 <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMore} hasMore={this.state.articles.length !== this.state.totalResults} loader={<Spinner />}>
//                     <div className='container'>
//                         <div className="row">
//                             {this.state.articles.map((element) => {
//                                 return (
//                                     <div key={element.url} className="col-md-4">
//                                         <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 130) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                     </div>
//                 </InfiniteScroll>
//                 {/* <div className="container d-flex justify-content-between mt-5">
//                     <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
//                     <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//                 </div> */}

//             </>
//         )
//     }
// }

