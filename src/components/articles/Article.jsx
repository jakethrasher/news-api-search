import React from 'react'
import PropTypes from 'prop-types'
import './articles.css'

function Article({ title, image, url}) {
    return (
    <figure>
        <img src={image}/>
        <a href={url}><figcaption>{title}</figcaption></a>
    </figure>
        
    )
}
        
Article.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    url: PropTypes.string.isRequired,
}

export default Article
