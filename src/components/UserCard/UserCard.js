import React from "react";
import "../../Styles/CardStyle.css"

function UserCard(props) {
    return (
      <section className="user_card">
        <h1>{props.login}</h1>
        <img src={props.avatar} alt="User avatar" width="300" height="200" />
        <p>{props.name}</p>
      </section>
    );
  }
  
export default UserCard;