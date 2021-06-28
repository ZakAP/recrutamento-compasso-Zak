import React from "react";

function Starred(props) {
    
    const userStarredList = props.UserStarred.map((star) =>{
        return (
            <li>
                <b>Nome do repositório:</b>
                <p>{star.name}</p>

                <b>Dono do Repositório:</b>
                <p>{star.owner.login}</p>

                <b>Numero de estrelas:</b>
                <p>{star.stargazers_count}</p>

                <b>Descrição:</b>
                <p>{star.description}</p>

                <b>Link do repositório:</b>
                <p>{star.html_url}</p>   
            </li>
        )
    })

    return (
      <div>
        <h2>Repositórios marcados:</h2>
        <ul>
            {userStarredList}
        </ul>
      </div>
    );
}
  
export default Starred;