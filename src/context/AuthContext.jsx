import { useEffect, useState, useContext, createContext } from "react";
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isAuth, setIsAuth] = useState(() => {
        return localStorage.getItem('isAuth') === 'true';
    });

    const [role, setRole] = useState(() => {
        return localStorage.getItem('role') || '';
    });

    const navigate = useNavigate();


    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuth') === 'true'
        const storedRole = localStorage.getItem('role');

        if (isAuthenticated) {
            setIsAuth(true);
            setRole(storedRole);
        }
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        let validationErrors = {};
        if (!email) validationErrors.email = 'Email es requerido';
        if (!password) validationErrors.password = 'Password es requerido';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const res = await fetch('data/users.json');
            const users = await res.json();

            const foundUser = users.find(
                (user) => user.email === email && user.password === password
            );

            if (!foundUser) {
                setErrors({ email: 'credenciales invalidas' });
            } else {
                // console.log(`role: ${role} isAuth: ${isAuth}`)

                if (foundUser.role === 'admin') {
                    setIsAuth(true);
                    setRole('admin');
                    localStorage.setItem('isAuth', true)
                    localStorage.setItem('role', 'admin')
                    navigate('/admin');
                } else {
                    setIsAuth(true);
                    setRole('client');
                    localStorage.setItem('isAuth', true)
                    localStorage.setItem('role', 'client')
                    navigate('/');
                }
            }
            // console.log(`role: ${role} isAuth: ${isAuth} ${localStorage.getItem('isAuth')} ${localStorage.getItem('role')}`)

        } catch (err) {
            console.error('Error fetching users:', err);
            setErrors({ email: 'Algo salió mal. Por favor, inténtalo de nuevo más tarde.' });
        }
    };

    return (
        <AuthContext.Provider value={{ email, setEmail, password, setPassword, handleSubmit, errors, isAuth, setIsAuth, role, setRole }}>
            {children}
        </AuthContext.Provider>
    )
}

