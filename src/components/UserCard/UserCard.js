import React from "react";

function UserCard(props) {
    return (
      <div>
        <h2>{props.login}</h2>
        <img src={props.avatar} alt="User avatar" width="300" height="200" />
        <p>{props.name}</p>
      </div>
    );
  }
  
export default UserCard;