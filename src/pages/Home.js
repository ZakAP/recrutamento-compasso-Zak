import axios from 'axios';
import React, {useEffect, useState} from 'react';
import UserCard from "../components/UserCard/UserCard";
import SearchBar from '../components/SearchBar/SearchBar';
import ReposList from '../components/ReposList/ReposList';
import Starred from '../components/Starred/Starred';

function Home() {
    const [user, setUser] = useState(null)
    const [userRepos, setUserRepos] = useState(null)
    const [userStarred, setUserStarred] = useState(null)
    const [userLogin, setUserLogin] = useState('')
    const [searchName, setSearchName] = useState('')
    const [showInfo, setShowInfo] = useState('')

    const authorization = {
      baseUrl: "https://api.github.com",
      client_id: "05b7013e29d24cbc6e96",
      client_secret: "4cc53419635e5f2a0ca6847a9534d4e3306bbcd7"
    }

    useEffect(() => {
        axios
          .get(`${authorization.baseUrl}/users/${searchName}?client_id=${authorization.client_id}&client_secret=${authorization.client_secret}`)
          .then((ress) => {
            setUser(ress.data);
          })
          .catch(err => {
            console.log(err);
          });
        axios
          .get(`https://api.github.com/users/${searchName}/repos`)
          .then((ress) => {
            setUserRepos(ress.data);
          })
          .catch(err => {
            console.log(err);
          });
        axios
          .get(`https://api.github.com/users/${searchName}/starred`)
          .then((ress) => {
            setUserStarred(ress.data);
          })
          .catch(err => {
            console.log(err);
          });
    }, [searchName])

    const onClickShowInfoRepos = () => {
      setShowInfo('repos')
    }
    const onClickShowInfoStarred = () => {
      setShowInfo('starred')
    }
    const onClickShowInfoBack = () => {
      setShowInfo('')
    }

    const showInformation = () => {
      switch(showInfo) {
        case 'repos':
          return (
            <div>
              <button onClick={onClickShowInfoBack}>Voltar</button>
              <ReposList
                UserRepos={userRepos}
              />
            </div>
          )
        case 'starred':
          return (
            <div>
              <button onClick={onClickShowInfoBack}>Voltar</button>
              <Starred 
                UserStarred={userStarred}
              />
            </div>
          )
        default:
          return <div>
          <button onClick={onClickShowInfoRepos} >Repositórios</button>
          <button onClick={onClickShowInfoStarred}>Starred</button>
        </div>
      }
    }
 
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
       
        {userRepos && <div>
          {showInformation()}
        </div> }
      </div>
    );
  }
  
export default Home;