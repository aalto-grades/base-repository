import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import userService from '../services/user';

const Login= () => {
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await userService.login({
              username, password,
            })
            setUser(user)
            setUsername('')
            setPassword('')
          } catch (exception) {
            console.log('Error: wrong credentials')
          }
      }

    return (
        <div>
            <h1>Login</h1>
            <p>Don't have an account yet? <a href={'/Signup'}>Sign up</a></p>
            <form onSubmit={handleLogin}>
                <div>
            <TextField
                    type="username"
                    value={username}
                    name="Username"
                    label="Username"
                    onChange={({ target }) => setUsername(target.value)}
                    InputLabelProps={{ shrink: true }}
                    margin="normal"
                />
                </div>
                <div>
                <TextField
                    type="password"
                    value={password}
                    name="Password"
                    label="Password"
                    onChange={({ target }) => setPassword(target.value)}
                    InputLabelProps={{ shrink: true }}
                    margin="normal"
                />
                </div>
                <Button type="submit">login</Button>
            </form>
        </div>
      );
}

export default Login;