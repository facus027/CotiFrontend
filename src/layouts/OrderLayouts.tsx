import { Link, Outlet } from 'react-router-dom'
import Footer from '../components/ui/Footer'
import ProductDetailModal from '../components/products/ProductDetailModal'
import Logo from '../components/ui/Logo'
import SearchPRoducts from '../components/SearchPRoducts'
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react'
import { useStore } from '../store/store'
import OrderPopup from '../components/order/OrderPopup'
import { ToastContainer } from 'react-toastify'


export default function OrderLayouts() {
    const [isHovered, setIsHovered] = useState(false);

    const { order } = useStore()


    return (
        <>
            <div className=' min-w-full flex flex-col lg:flex-row lg:justify-around gap-4 items-center mt-3'>
                <div className='ml-0 lg:ml-64'>
                    <Logo />
                </div>
                <div className='-ml-40 w-2/5 z-40'>
                    <SearchPRoducts />
                </div>
                <div className='p-1 rounded-full'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <div className='fixed right-10 top-10 z-40'>
                        <div>
                            <span className='absolute rounded-full z-10 menu-item-a bg-orange-light p-1 ml-16 -top-3 text-white font-baloo text-2xl font-light hover:text-black'
                            >{order.length}</span>
                            <p className="menu-item">
                                <Link className="menu-item-a bg-orange-light hover:text-white rounded-full p-2" to="/carrito"><FaShoppingCart size={35} /></Link>
                            </p>
                        </div>
                        <div className='relative bottom-24 left-8'
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>
                            {isHovered && <OrderPopup order={order} />}
                        </div>
                    </div>
                </div>
            </div>

            <section className="w-full mx-auto overflow-x-hidden p-2">
                <Outlet />
            </section>

            <div className=' min-w-full flex flex-col lg:flex-row justify-between items-center '>
                <Footer />
            </div>
            <ProductDetailModal />
            <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    )
}
