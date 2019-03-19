import React from 'react'

const SearchBar = (props) => {

return (
    <div>

    <input 
    type="text"
    placeholder="Search"
    name="searchInput"
    value={props.searchInput}
    onChange={props.searchHandler}
    />

    </div>
)
}

export default SearchBar