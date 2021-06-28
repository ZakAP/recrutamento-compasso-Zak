import React from "react";
import "../../Styles/CardStyle.css"

function Starred(props) {
    
    const userStarredList = props.UserStarred.map((star) =>{
        return (
            <li className="card" key={star.id}>
                <b>Nome do repositório:</b>
                <p>{star.name}</p>

                <b>Dono do Repositório:</b>
                <p>{star.owner.login}</p>

                <b>Numero de estrelas:</b>
                <p>{star.stargazers_count}</p>

                <b>Descrição:</b>
                <p>{star.description}</p>

                <b>Link do repositório:</b>
                <a href={star.html_url}>{star.html_url}</a>   
            </li>
        )
    })

    return (
      <article className="conteiner">
        <h2>Repositórios marcados:</h2>
        <ul>
            {userStarredList}
        </ul>
      </article>
    );
}
  
export default Starred;