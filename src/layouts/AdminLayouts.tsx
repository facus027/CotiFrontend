import { Link, Outlet, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Logo from '../components/ui/Logo'
import UpdatePriceModal from '../components/admin/products/UpdatePriceModal'

export default function AdminLayouts() {

    const navigate = useNavigate()

    return (
        <>
            <header className='py-2 flex flex-row lg:flex-col mx-auto w-11/12'>

                <Logo />

                <nav >
                    <ul className='flex justify-between mx-auto items-center my-5'>
                        <li >
                            <Link
                                className="border border-gray-200 text-black rounded-lg shadow-xl hover:bg-oreange-pastel px-10 p-1 text-sm 
                        font-bold cursor-pointer transition-colors"
                                to="/admin/create"
                            >
                                Crear Producto
                            </Link>
                        </li>
                        <li>
                            <button
                                type='button'
                                className="border border-gray-200 text-black rounded-lg shadow-xl hover:bg-oreange-pastel px-10 p-1 text-sm 
                        font-bold cursor-pointer transition-colors"
                                onClick={() => navigate(location.pathname + '?newTask=true')}
                            >
                                Actualizar Precios
                            </button>
                        </li>
                        <li >
                            <Link
                                className="border border-gray-200 text-black rounded-lg shadow-xl hover:bg-oreange-pastel px-10 p-1 text-sm 
                        font-bold cursor-pointer transition-colors"
                                to={`/admin/order/${'pendiente'}`}
                            >
                                Ver Ordenes
                            </Link>
                        </li>
                        <li className="border border-gray-200 text-black rounded-lg shadow-xl hover:bg-oreange-pastel px-10 p-1 text-sm 
                        font-bold cursor-pointer transition-colors">
                            Ingresar Pedido
                        </li>
                        <li className="border border-gray-200 text-black rounded-lg shadow-xl hover:bg-oreange-pastel px-10 p-1 text-sm 
                        font-bold cursor-pointer transition-colors">
                            Ver Pedidos
                        </li>
                        <li >
                            <Link
                                className="border border-gray-200 text-black rounded-lg shadow-xl hover:bg-oreange-pastel px-10 p-1 text-sm 
                        font-bold cursor-pointer transition-colors"
                                to={`/admin/recipe`}
                            >
                                Ingresar Receta
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <section className="w-full mx-auto p-5 mt-5">
                <Outlet />
            </section>

            <div className=" py-3 bg-transparent border-3 border-t border-orange-400 rounded-xl w-full shadow-xl top-0 y left-0 z-50 ">
                <div className="flex flex-col mt-8 gap-5">
                    <p className=" text-center"> &copy; {new Date().getFullYear()} Cotillon San Martin, Inc</p>
                </div>
            </div>

            <ToastContainer />
            <UpdatePriceModal />
        </>
    )
}
