import { Routes, Route } from 'react-router'
import './App.css'

import { UserContext } from './contexts/UserContext'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Register from './components/register/Register'
import Login from './components/login/login'
import Catalogue from "./components/catalogue/Catalogue"
import GameCreate from './components/gameCreate/gameCreate'
import GameEdit from './components/gameEdit/GameEdit'
import GameDetails from "./components/gameDetails/GameDetails"
import { useState } from 'react'

function App() {
  const [authData,setAuthData] = useState({});
  const userLoginHandler = (resultData) => {
    setAuthData(resultData);
  }
  return (
<UserContext.Provider value={{...authData,userLoginHandler}}>
    <div id="box">
      <Header/>

        {/* <!-- Main Content --> */}
        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/catalogue' element={<Catalogue/>}/>
            <Route path='/catalogue/create' element={<GameCreate/>}/>
            <Route path='/catalogue/:gameId/edit' element={<GameEdit/>}/>
            <Route path='/catalogue/:gameId/details' element={<GameDetails/>}/>
          </Routes>
        </main>        
    </div>
</UserContext.Provider>
  )
}

export default App
