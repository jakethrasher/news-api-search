import React from 'react'
import PropTypes from 'prop-types'

function Search({value,onQueryChange,onSubmit}) {
    return (
       <form onSubmit={onSubmit}>
           <label>
            Search By Keyword
            <input value={value} onChange={onQueryChange} type="tex"/>
           </label>
           <button aria-label="search-articles">Search</button>
       </form>
    )
}

Search.propTypes = {
    value:PropTypes.string.isRequired,
    onQueryChange:PropTypes.func.isRequired,
    onSubmit:PropTypes.func.isRequired,
}

export default Search

