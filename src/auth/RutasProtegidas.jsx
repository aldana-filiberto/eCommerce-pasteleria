import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

function RutaProtegida({ children }) {

    const { isAuth, role } = useContext(AuthContext);

    if (!isAuth) {
        return <Navigate to='/login' replace />;
    }
    
    if (role !== 'admin') {
        return <Navigate to="/not-found" replace />
    }

    return children;

}
export default RutaProtegida;