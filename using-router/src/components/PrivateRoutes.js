// Refs.: 
// - https://medium.com/@dennisivy/creating-protected-routes-with-react-router-v6-2c4bbaf7bc1c
// - https://www.youtube.com/watch?v=2k8NleFjG7I
import { Navigate, Outlet } from 'react-router'
import auth from '../auth'
import Login from './Login'

const PrivateRoutes = () => {
    return (
        auth.isAuthenticated() ? <Outlet /> : <Navigate to={<Login />} />
    )
}

export default PrivateRoutes