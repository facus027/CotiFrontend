import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleLogin = (e: any) => {
        e.preventDefault();

        // Simulación de autenticación
        if (email === 'cotillon@sanmartin.com' && password === 'heladolomejor') {
            // Simulamos guardar el usuario autenticado en localStorage
            localStorage.setItem('user', JSON.stringify({ role: 'admin' }));

            // Redirige al panel de administración
            navigate('/admin');
        } else {
            setError('Credenciales incorrectas. Intenta de nuevo.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 bg-banner-inicio bg-container">
            <div className='absolute -rotate-12 left-44 top-40'>
                <img className="w-64 h-44" alt="Logotipo CotillonSm" src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1722520949/r24lgbeiyz1j3xs3mllv.png" />
            </div>
            <div className='absolute rotate-12 right-36 top-40'>
                <img className="w-64 h-44" alt="Logotipo CotillonSm" src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1722520949/r24lgbeiyz1j3xs3mllv.png" />
            </div>
            <div className=" p-6 rounded-lg shadow-lg w-full max-w-md bg-oreange-pastel">
                <h2 className="text-2xl font-semibold text-center mb-5 font-luckiest tracking-wider">Iniciar Sesión</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="font-chewy tracking-wider block text-gray-700 text-md font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ingresa tu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="font-chewy tracking-wider block text-gray-700 text-md font-bold mb-2">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ingresa tu contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && <p className="text-white rounded-lg px-1.5 text-center bg-red-600 text-sm mb-4">{error}</p>}

                    <div className="flex items-center justify-between ">
                        <button
                            type="submit"
                            className="bg-orange-dark hover:bg-orange-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginView;