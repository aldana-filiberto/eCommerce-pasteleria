import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {

    const { email, setEmail, password, setPassword, handleSubmit, errors } = useContext(AuthContext);

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Iniciar Sesión</h2>

                <label htmlFor="email">Correo electrónico</label>
                <input
                    type="email"
                    id="email"
                    placeholder="correo@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                    <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                        {errors.email}
                    </div>
                )}

                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                />

                {errors.password && (
                    <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                        {errors.password}
                    </div>
                )}

                <button type="submit">Ingresar</button>

                <p className="extra-text">
                    <Link  to='/'>Regresar a la home</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
