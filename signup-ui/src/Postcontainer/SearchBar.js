import React from 'react'

const SearchBar = (props) => {

return (
    <div className='searchBar'>


<img className="DisneyLogo2" src='https://voxdjs.com/wp-content/uploads/2018/08/disney-logo.png'/>
    <div className="searchInput">
    <input 
    type="text"
    placeholder="Search"
    name="searchInput"
    value={props.searchInput}
    onChange={props.searchHandler}
    />
    <i class="fas fa-search"></i>
    </div>


    <div className="PLUS">
    <i class="far fa-plus-square fa-3x"></i>
    </div>


    </div>
)
}

export default SearchBar