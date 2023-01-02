// News Item component to render each news card using props from News component, shows default image with none available, shortens title and description of news to ensure card sizes; badge source news source

// import React, { Component } from 'react'
import React from 'react'

const NewsItem = (props) => {
    // export class NewsItem extends Component {
    //     render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div>
            <div className="card mt-4" >
                <div style={{ 
                    "position": "absolute", 
                    "right": "0", 
                    "display": "flex", 
                    "justifyContent": "flex-end" 
                    }}>
                    <span className="badge rounded-pill bg-danger" >
                        {source}
                    </span>
                </div>
                <img src={imageUrl ? imageUrl : "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className='card-text'><small className='text-muted'>By <strong>{author ? author : "Unknown"}</strong> on {new Date(date).toGMTString() }</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
    // }
}

export default NewsItem
