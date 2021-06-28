import axios from 'axios';
import React, {useState} from 'react';
import UserCard from "../components/UserCard/UserCard";
import SearchBar from '../components/SearchBar/SearchBar';
import ReposList from '../components/ReposList/ReposList';
import Starred from '../components/Starred/Starred';
import "../Styles/BasicStyle.css"

function Home() {
    const [user, setUser] = useState(null)
    const [userRepos, setUserRepos] = useState(null)
    const [userStarred, setUserStarred] = useState(null)
    const [searchName, setSearchName] = useState('')
    const [showInfo, setShowInfo] = useState('')

    const authorization = {
      baseUrl: "https://api.github.com/users/",
      client_id: process.env.REACT_APP_client_id,
      client_secret: process.env.REACT_APP_client_secret
    }

    const getUser = () => {
        axios
          .get(`${authorization.baseUrl}${searchName}?client_id=${authorization.client_id}&client_secret=${authorization.client_secret}`)
          .then((ress) => {
            setUser(ress.data);
          })
          .catch(err => {
            console.log(err);
          });
        axios
          .get(`${authorization.baseUrl}${searchName}/repos?client_id=${authorization.client_id}&client_secret=${authorization.client_secret}`)
          .then((ress) => {
            setUserRepos(ress.data);
          })
          .catch(err => {
            console.log(err);
          });
        axios
          .get(`${authorization.baseUrl}${searchName}/starred?client_id=${authorization.client_id}&client_secret=${authorization.client_secret}`)
          .then((ress) => {
            setUserStarred(ress.data);
          })
          .catch(err => {
            console.log(err);
          });
    }

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
            <>
            <button onClick={onClickShowInfoBack}>Voltar</button>
            <section>
              <ReposList
                UserRepos={userRepos}
              />
            </section>
            </>
          )
        case 'starred':
          return (
            <>
              <button onClick={onClickShowInfoBack}>Voltar</button>
              <section>
                <Starred 
                  UserStarred={userStarred}
                />
              </section>
            </>
          )
        default:
          return (
            <section>
              <button onClick={onClickShowInfoRepos} >Repositórios</button>
              <button onClick={onClickShowInfoStarred}>Starred</button>
            </section>
          )
      }
    }
 
    return (
      <div>
        <SearchBar
        setSearchName={setSearchName}
        getUser={getUser}
        searchName={searchName}
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