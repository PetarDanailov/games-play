import { Routes, Route } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Register from './components/register/Register'
import Login from './components/login/login'
import Catalogue from "./components/catalogue/Catalogue"
import GameCreate from './components/gameCreate/gameCreate'
import GameEdit from './components/gameEdit/GameEdit'

function App() {
  return (
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
            <Route path='/catalogue/edit' element={<GameEdit/>}/>
          </Routes>
        </main>

        {/* <!--Home Page--> */}
       

        {/* <!-- Login Page ( Only for Guest users ) --> */}
       

        {/* <!-- Register Page ( Only for Guest users ) --> */}
       

        {/* <!-- Create Page ( Only for logged-in users ) --> */}
        

        {/* <!-- Edit Page ( Only for the creator )--> */}
      

        {/* <!--Details Page--> */}
      

        {/* <!-- Catalogue --> */}
        
    </div>
  )
}

export default App
