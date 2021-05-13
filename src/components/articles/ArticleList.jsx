import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import './articles.css'
function ArticleList({articles}) {
    return (
        <ul>
            {articles.map(article=>(
                <li>
                    <Article
                    author={article.author}
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
        author: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        url:PropTypes.string.isRequired
    }))
}

export default ArticleList

