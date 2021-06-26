import axios from 'axios';
import React, {useEffect, useState} from 'react';
import UserCard from "../components/UserCard/UserCard";
import SearchBar from '../components/SearchBar/SearchBar';

function Home() {
    const [user, setUser] = useState(null)
    const [userLogin, setUserLogin] = useState('')
    const [searchName, setSearchName] = useState('')

    useEffect(() => {
        axios
          .get(`https://api.github.com/users/${searchName}`)
          .then((ress) => {
            setUser(ress.data);
          })
          .catch(err => {
            console.log(err);
          });
    }, [searchName])
    
 
    return (
      <div>
        <SearchBar
        setUser={setUserLogin}
        setSearch={setSearchName}
        userLogin={userLogin}
        />

        {user && <UserCard 
        login={user.login}
        avatar={user.avatar_url}
        name={user.name}
        />}
      </div>
    );
  }
  
export default Home;