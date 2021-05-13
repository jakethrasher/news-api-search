import React from 'react'
import PropTypes from 'prop-types'
import './articles.css'
function Article({author, title, image, url}) {
    return (
    <figure>
        <img src={image}/>
        <a href={url}><figcaption>{title} By: {author}</figcaption></a>
    </figure>
        
    )
}
        

Article.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default Article

