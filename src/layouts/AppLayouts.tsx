import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/ui/Footer'


export default function AppLayouts() {
    return (
        <>
            <div className=' min-w-full flex flex-col lg:flex-row justify-between items-center '>
                <Header />
            </div>

            <section className="w-full mx-auto p-5">
                <Outlet />
            </section>

            <div className=' min-w-full flex flex-col lg:flex-row justify-between items-center '>
                <Footer />
            </div>

        </>
    )
}
