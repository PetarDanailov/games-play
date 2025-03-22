import { useContext } from "react"
import { Link } from "react-router"
import { UserContext } from "../../contexts/UserContext"

export default function Header(){
    const {email} = useContext(UserContext)
 return( <header>
  {/* <!-- Navigation --> */}
  <h1><Link className="home" to="/">GamesPlay</Link></h1>
  <nav>
      <Link to="/catalogue">All games</Link>
      {/* <!-- Logged-in users --> */}
      {email
        ?(<div id="user">
            <Link to="/catalogue/create">Create Game</Link>
            <Link to="/logout">Logout</Link>
        </div>)
        :( <div id="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>)
      }
      {/* <!-- Guest users --> */}
     
  </nav>
</header>)
}