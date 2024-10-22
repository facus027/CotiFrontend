import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/ui/Footer'
import ProductDetailModal from '../components/products/ProductDetailModal'
import RecipeDetailModal from '../components/recipes/RecipeModal'


export default function AppLayouts() {
    return (
        <>
            <div className=' min-w-full flex flex-col lg:flex-row justify-between items-center '>
                <Header />
            </div>

            <section className="w-full mx-auto">
                <Outlet />
            </section>

            <div className=' min-w-full flex flex-col lg:flex-row justify-between items-center '>
                <Footer />
            </div>
            <ProductDetailModal />
            <RecipeDetailModal />
        </>
    )
}
