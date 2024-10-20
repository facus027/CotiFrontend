import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="py-3 bg-transparent border-4 border-t border-orange-400 p-1 rounded-xl w-full shadow-xl top-0 left-0">
            <div className="flex flex-col lg:flex-row mx-auto items-center justify-between lg:justify-around">

                <div className="text-center lg:text-left mb-5 lg:mb-0">
                    <h1 className="uppercase text-2xl lg:text-4xl font-luckiest tracking-wider">
                        Navegación
                    </h1>
                    <ul className="font-chewy flex flex-col  ml-0 lg:ml-5 text-lg lg:text-2xl space-y-1">
                        <Link to={"/recetas"}>* {" "}Recetas</Link>
                        <Link to={"/products"}>* {" "}Productos</Link>
                        <span className="border-2 border-orange-400 my-2"></span>
                        <Link to={"/products/reposteria"}>* {" "}Productos (Repostería)</Link>
                        <Link to={"/products/decoracion"}>* {" "}Productos (Decoración)</Link>
                        <Link to={"/products/carnaval"}>* {" "}Productos (Carnaval)</Link>
                        <Link to={"/products/globos"}>* {" "}Productos (Globos)</Link>
                        <Link to={"/products/golosinas"}>* {" "}Productos (Golosinas)</Link>
                        <Link to={"/products/souvenirs"}>* {" "}Productos (Souvenirs)</Link>
                        <Link to={"/products/decoracionTorta"}>* {" "}Productos (Decoración Torta)</Link>
                        <Link to={"/products/combos"}>* {" "}Productos (Combos)</Link>
                        <Link to={"/products/fiestasPatrias"}>* {" "}Productos (Fiestas Patrias)</Link>
                        <Link to={"/products/disfraces"}>* {" "}Productos (Disfraces)</Link>
                    </ul>
                </div>

                <div className="map-container text-center mb-5 lg:mb-0">
                    <h1 className="uppercase text-2xl lg:text-4xl font-luckiest tracking-wider mb-3">
                        Ubicación
                        <span className="block text-lg lg:text-xl">Sarmiento 160, San Martín, Mendoza</span>
                    </h1>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3342.967542761354!2d-68.4739421!3d-33.0836385!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e4304a9d71399%3A0x4edc729f49760f2d!2sCotillon%20San%20Martin%20Suc.!5e0!3m2!1ses-419!2sar!4v1729281169624!5m2!1ses-419!2sar"
                        width="100%" height="300" className="rounded-lg" style={{ border: 0 }}
                        loading="lazy" title="Google Maps Location"
                    ></iframe>
                </div>
            </div>

            <div className="flex flex-col mt-8 gap-5">
                <ul className="flex flex-row gap-3 mx-auto">
                    <li className="hover:bg-blue-300 rounded-full p-1 transition-colors">
                        <a href="https://www.facebook.com/people/Cotillon-San-Martin/100064042417602/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} />
                        </a>
                    </li>
                    <li className="hover:bg-green-300 rounded-full p-1 transition-colors">
                        <a href="https://wa.me/5492634475135" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={30} />
                        </a>
                    </li>
                    <li className="hover:bg-amber-300 rounded-full p-1 transition-colors">
                        <a href="https://www.instagram.com/cotillon.sanmartin/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} />
                        </a>
                    </li>
                    <li className="hover:bg-amber-300 hidden rounded-full p-1 transition-colors">
                        <Link to='/admin'>
                            <FaTwitter size={30} />
                        </Link>
                    </li>
                </ul>
                <p className="text-center"> &copy; {new Date().getFullYear()} Cotillon San Martin, Inc</p>
            </div>
        </div>

    )
}
