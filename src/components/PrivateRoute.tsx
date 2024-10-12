import { Navigate } from 'react-router-dom';

// Simulamos una función de autenticación. En la vida real, obtendrías esta información desde el almacenamiento local o una API.
const isAuthenticated = () => {
    // Puedes reemplazar esto con la lógica real de autenticación
    const user = localStorage.getItem('user');  // Podrías almacenar un token de autenticación aquí
    return user && JSON.parse(user).role === 'admin';  // Chequeamos si el rol es admin
};

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    // Si el usuario está autenticado como admin, permite el acceso a la ruta.
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;