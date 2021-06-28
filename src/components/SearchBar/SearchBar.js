import React from "react";

function SearchBar(props) {

    const onChangeSearchName = (e) => {
        props.setSearchName(e.target.value)
    } 
    
    const onClickSearch = () => {
        props.getUser()
        props.setSearchName('')
    }

    return (
      <div>
        
        <input type="text" placeholder="Buscar usuário" onChange={onChangeSearchName} value={props.searchName}/>
        <button onClick={onClickSearch}>Buscar</button>
        
      </div>
    );
}
  
export default SearchBar;