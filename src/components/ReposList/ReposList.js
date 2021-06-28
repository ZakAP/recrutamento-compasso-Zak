import React from "react";

function ReposList(props) {
    
    const userReposList = props.UserRepos.map((repos) =>{
        return (
            <li key={repos.id}>
                <b>Nome do repositório:</b>
                <p>{repos.name}</p>

                <b>Descrição:</b>
                <p>{repos.description}</p>

                <b>Link do repositório:</b>
                <p>{repos.html_url}</p>   
            </li>
        )
    })

    return (
      <div>
        <h2>Repositórios do usuário</h2>
        <ul>
            {userReposList}
        </ul>
      </div>
    );
}
  
export default ReposList;