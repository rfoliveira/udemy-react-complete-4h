import { Navigate } from 'react-router'
import auth from '../auth'

const defaultLogin = {
    user: 'Fulano',
    password: '12345'
}

const Login = () => {
    const submitHandler = () => {
        auth.login(() => (<Navigate to='/' />))
    }

    return (
        <div className="container">
            <form className="row g-3" onSubmit={submitHandler}>
                <div className="mb-2">
                    <label htmlFor="user">User</label>
                    <input type="text" id="user" className="form-control form-control-sm" value={defaultLogin.user} />
                </div>
                <div className="mb-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control form-control-sm" value={defaultLogin.password} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>            
        </div>
    )
}

export default Login