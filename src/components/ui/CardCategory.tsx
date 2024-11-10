import { Link } from 'react-router-dom';

export default function CardCategory() {



    return (
        <div >
            <div className="grid gap-7 lg:grid-cols-2 grid-cols-1 mb-6" >

                <div>
                    <Link className=' shadow-orange-light' to={'/productos/globos'} >
                        <h2 className="absolute lg:left-56 left-0 justify-center text-center mt-32 font-bold text-black text-6xl font-luckiest uppercase tracking-wider">
                            globos
                        </h2>
                        <img
                            alt="imagen_categoria_globos"
                            src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1729792875/uergnzh8ih93wnuvptyg.jpg"
                            title="imagen_categoria_globos"
                            loading="lazy"
                            className=" h-80 w-full border-2 items-center justify-center border-gray-400 first-line:grid-cols-1
                     group overflow-hidden">
                        </img>
                    </Link>
                </div>

                <div>
                    <Link className=' shadow-orange-light' to={'/productos/reposteria'} >
                        <h2 className="absolute lg:right-56 right-0 justify-center text-center mt-32 font-bold text-black text-6xl font-luckiest uppercase tracking-wider">
                            reposteria
                        </h2>
                        <img
                            alt="imagen_categoria_reposteria"
                            src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1729792901/lmwfjzhbsqkqvp188bpj.jpg"
                            title="imagen_categoria_reposteria"
                            loading="lazy"
                            className=" h-80 bg-cover w-full border-2 items-center justify-center border-gray-400 first-line:grid-cols-1
                     group overflow-hidden">
                        </img>
                    </Link>
                </div>

                <div>
                    <Link className=' shadow-orange-light' to={'/productos/decoracion'} >
                        <h2 className="absolute lg:left-56 left-0 justify-center text-center mt-32 font-bold text-black text-6xl font-luckiest uppercase tracking-wider">
                            decoracion
                        </h2>
                        <img
                            alt="imagen_categoria_decoracion"
                            src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1729792893/oegwllbgzjgrgcdz4zdm.jpg"
                            title="imagen_categoria_decoracion"
                            loading="lazy"
                            className=" h-80 bg-cover w-full border-2 items-center justify-center border-gray-400 first-line:grid-cols-1
                     group overflow-hidden">
                        </img>
                    </Link>
                </div>

                <div>
                    <Link className=' shadow-orange-light' to={'/productos/carnaval'} >
                        <h2 className="absolute lg:right-56 right-0 justify-center text-center mt-32 font-bold text-black text-6xl font-luckiest uppercase tracking-wider">
                            carnaval
                        </h2>
                        <img
                            alt="imagen_categoria_carnaval"
                            src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1729792905/xt7y96l4wxwcelkbnugg.jpg"
                            title="imagen_categoria_carnaval"
                            loading="lazy"
                            className=" h-80 bg-cover w-full border-2 items-center justify-center border-gray-400 first-line:grid-cols-1
                     group overflow-hidden">
                        </img>
                    </Link>
                </div>
            </div>

            <div>
                <Link className=' shadow-orange-light' to={'/productos/golosinas'} >
                    <div className='grid grid-cols-1'>
                        <h2 className="absolute lg:right-72 right-0 justify-center text-center mt-32 font-bold text-black text-6xl font-luckiest uppercase tracking-wider">
                            golosinas
                        </h2>
                        <img
                            alt="imagen_categoria_golosinas"
                            src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1729792912/gkxmi2wgmauuioc3unkw.jpg"
                            title="imagen_categoria_golosinas"
                            loading="lazy"
                            className=" h-80 bg-cover w-full border-2 items-center justify-center border-gray-400 first-line:grid-cols-1
                     group overflow-hidden">
                        </img>
                    </div>
                </Link>
            </div>

        </div>
    )
}
