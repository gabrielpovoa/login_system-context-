import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Container } from "./Applicationstyle"
import { AuthContext } from "./Contexts/Auth/AuthContext"
import { RoutList } from "./Routesystem"
const App = () => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await auth.signout()
    navigate('/');
  }

  return <>
    <Container>
      <header>
        <h1>Login React System</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Sign In</Link>
          { auth.user &&
            <Link to="/" onClick={handleSignOut}> Sign Out</Link>
          }
        </nav>
      </header>
      <RoutList />
    </Container>
  </>
}

export default App