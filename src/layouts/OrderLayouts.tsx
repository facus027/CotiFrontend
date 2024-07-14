import { Link, Outlet } from 'react-router-dom'
import Footer from '../components/ui/Footer'
import ProductDetailModal from '../components/products/ProductDetailModal'
import Logo from '../components/ui/Logo'
import SearchPRoducts from '../components/SearchPRoducts'
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react'
import { useStore } from '../store/store'
import OrderPopup from '../components/order/OrderPopup'



export default function OrderLayouts() {
    const [isHovered, setIsHovered] = useState(false);

    const { order } = useStore()


    return (
        <>
            <div className=' min-w-full flex flex-col lg:flex-row lg:justify-around  items-center '>
                <div className='ml-44'>
                    <Logo />
                </div>
                <div className='w-1/3'>
                    <SearchPRoducts />
                </div>
                <div className='p-1 rounded-full hover:bg-amber-300'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <div

                    >
                        <Link to={'/carrito'}>
                            <FaShoppingCart size={30} />
                        </Link>

                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>
                            {isHovered && <OrderPopup order={order} />}
                        </div>
                    </div>
                </div>
            </div>



            <section className="w-full mx-auto p-5 mt-2">
                <Outlet />
            </section>

            <div className=' min-w-full flex flex-col lg:flex-row justify-between items-center '>
                <Footer />
            </div>
            <ProductDetailModal />
        </>
    )
}
