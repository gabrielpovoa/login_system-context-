import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/Auth/AuthContext";
import { Container, Form } from "./style";

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInPrivate = async () => {
        if(email && password) {
            const isLogged = await auth.signin(email, password);
            navigate('/')
        } else {
            alert("Try again")
        }
    }

    return (
        <Container>
            <h2>Locked Page</h2>

            <Form>
                <input
                    type="text"
                    value={email}
                    placeholder="Fill out with your e-mail"
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    placeholder="fill out with your password"
                    onChange={e => setPassword(e.target.value)}
                />
            </Form>
            <input type="submit" className="button" value="Sign in" onClick={signInPrivate} />
        </Container>
    )
}