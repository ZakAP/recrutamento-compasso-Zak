import React from "react";
import "../../Styles/BasicStyle.css"

function SearchBar(props) {

    const onChangeSearchName = (e) => {
        props.setSearchName(e.target.value)
    } 
    
    const onClickSearch = () => {
        props.getUser()
        props.setSearchName('')
    }

    return (
      <section className="search_bar">
        <input type="text" placeholder="Buscar usuário" onChange={onChangeSearchName} value={props.searchName}/>
        <button onClick={onClickSearch}>Buscar</button>
      </section>
    );
}
  
export default SearchBar;