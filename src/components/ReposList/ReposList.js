import React from "react";
import "../../Styles/CardStyle.css"

function ReposList(props) {
    
    const userReposList = props.UserRepos.map((repos) =>{
        return (
            <li className="card" key={repos.id}>
                <b>Nome do repositório:</b>
                <p>{repos.name}</p>

                <b>Descrição:</b>
                <p>{repos.description}</p>

                <b>Link do repositório:</b>
                <a href={repos.html_url}>{repos.html_url}</a>   
            </li>
        )
    })

    return (
        <article className="conteiner">
            <h2>Repositórios do usuário:</h2>
            <ul>
                {userReposList}
            </ul>
        </article>
    );
}
  
export default ReposList;