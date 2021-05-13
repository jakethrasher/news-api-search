import React, { Component } from 'react'
import ArticleList from '../components/articles/ArticleList'
import Search from '../components/articles/Search'
import fetchArticles, { fetchHeadlines } from '../services/fetchArticles'

export default class ArticlesContainer extends Component {
    state={
        articles:[],
        loading:true,
        query:''
    }
    componentDidMount = async () => {
        const articles = await fetchHeadlines()
        console.log(articles)
        this.setState({
            articles,
            loading:false
        })
    }
    handleQueryChange = ({target}) => {
        
        this.setState({
            query:target.value
        })
    }
    render() {
        
        return (
            <>
                {this.state.loading ? <h2>Loading...</h2>:
                <>
                    <Search value={this.state.query} onQueryChange={this.handleQueryChange}/>
                    <ArticleList articles={this.state.articles}/>
                </>}
           </>
        )
    }
}
