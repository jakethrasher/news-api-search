import React, { Component } from 'react'
import ArticleList from '../components/articles/ArticleList'
import fetchArticles from '../services/fetchArticles'

export default class ArticlesContainer extends Component {
    state={
        articles:[],
        loading:true
    }
    componentDidMount = async () =>{
        const articles = await fetchArticles()
        console.log(articles)
        this.setState({
            articles,
            loading:false
        })
    }
    render() {
        
        return (
            <>
                {this.state.loading ? <h2>Loading...</h2>:
                <ArticleList articles={this.state.articles}/>}
           </>
        )
    }
}
