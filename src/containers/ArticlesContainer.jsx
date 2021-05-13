import React, { Component } from 'react'
import ArticleList from '../components/articles/ArticleList'
import Search from '../components/articles/Search'
import { fetchArticles, fetchHeadlines } from '../services/services'

export default class ArticlesContainer extends Component {
    state={
        articles:[],
        loading:true,
        query:''
    }
    componentDidMount = async () => {
        const articles = await fetchHeadlines()
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
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({loading:true}, async ()=>{

            const articles = await fetchArticles(this.state.query);

            this.setState({
                articles,
                loading:false
            })
        })
    }

        
    render() {
        
        return (
            <>
                {this.state.loading ? <h2>Loading...</h2>:
                <>
                    <Search value={this.state.query} onQueryChange={this.handleQueryChange} onSubmit={this.handleSubmit}/>
                    <ArticleList articles={this.state.articles}/>
                </>}
           </>
        )
    }
}
