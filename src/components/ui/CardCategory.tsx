import { Link } from 'react-router-dom';

export default function CardCategory() {



    return (
        <div >
            <div className="grid gap-7 lg:grid-cols-2 grid-cols-1 mb-6" >

                <Link className=' shadow-orange-light' to={'/products/globos'} >
                    <div
                        className={`bg-cover bg-banner-globos h-80 w-full border-2 items-center justify-center border-gray-400 first-line:grid-cols-1
                     group overflow-hidden`}>
                        <h1 className="justify-center text-center mt-32 font-bold text-black text-6xl font-luckiest uppercase tracking-wider
                     ">
                            globos
                        </h1>
                    </div>
                </Link>
                <Link to={'/products/reposteria'} >
                    <div
                        className={`bg-cover bg-banner-reposteria h-80 w-full border-2 items-center justify-center border-gray-400 first-line:grid-cols-1
                   `}>
                        <h1 className="justify-center text-center mt-32 font-bold text-black text-6xl font-luckiest uppercase tracking-wider
                     group-hover:text-black">
                            reposteria
                        </h1>
                    </div>
                </Link>
                <Link to={'/products/decoracion'} >
                    <div
                        className={`bg-cover group overflow-hidden bg-banner-decoracion h-80 w-full border-2 items-center justify-center border-gray-400 first-line:grid-cols-1`}>
                        <h1 className="justify-center text-center mt-32 font-bold text-black text-6xl font-luckiest uppercase tracking-wider
                        group-hover:text-black">
                            decoracion
                        </h1>
                    </div>
                </Link>
                <Link to={'/products/carnaval'} >
                    <div
                        className={`bg-cover bg-banner-carnaval h-80 w-full border-2 items-center justify-center border-gray-400 first-line:grid-cols-1
                     group overflow-hidden`}>
                        <h1 className="justify-center text-center mt-32 font-bold text-black text-6xl font-luckiest uppercase tracking-wider
                     group-hover:text-black">
                            carnaval
                        </h1>
                    </div>
                </Link>
            </div>
            <Link to={'/products/golosinas'} >
                <div className='grid grid-cols-1'>
                    <div
                        className={`bg-cover bg-banner-golosinas h-80 w-full border-2 items-center justify-center border-gray-400 first-line:grid-cols-1
                     group overflow-hidden`}>
                        <h1 className="justify-center text-center mt-32 font-bold text-black text-6xl font-luckiest uppercase tracking-wider
                    ">
                            golosinas
                        </h1>
                    </div>
                </div>
            </Link>
        </div>
    )
}
