import React from 'react'
import PropTypes from 'prop-types'

function Search({value,onQueryChange}) {
    return (
       <form>
           <label>
            Search By Keyword
            <input value={value} onChange={onQueryChange}/>
           </label>
       </form>
    )
}

Search.propTypes = {
    value:PropTypes.string.isRequired,
    onQueryChange:PropTypes.func.isRequired
}

export default Search

