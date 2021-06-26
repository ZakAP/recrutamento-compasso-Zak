import React from "react";

function SearchBar(props) {

    const onChangeSetUser = (e) => {
        props.setUser(e.target.value)
    } 
    
    const onClickSearch = () => {
        props.setSearch(props.userLogin)
    }

    return (
      <div>
        <input type="text" placeholder="Buscar usuário" onChange={onChangeSetUser}/>
        <button onClick={onClickSearch}>Buscar</button>
      </div>
    );
}
  
export default SearchBar;