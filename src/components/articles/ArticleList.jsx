import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import './articles.css'

function ArticleList({articles}) {
    return (
        <ul aria-label='articles'>
            {articles.map(article=>(
                <li key={`${article.title}-${article.image}`}>
                    <Article
                    title={article.title}
                    image={article.image}
                    url={article.url}
                    />
                </li>
            ))}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string,
        url:PropTypes.string.isRequired
    }))
}

export default ArticleList

