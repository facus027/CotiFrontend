import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className=" py-3 bg-transparent border-3 border-t border-orange-400 rounded-xl w-full shadow-xl top-0 y left-0 -z-20 ">
            <div className="flex flex-col mt-8 gap-5">
                <ul className="flex flex-row gap-3 mx-auto">
                    <li className="hover:bg-blue-300 rounded-full m-1 transition-colors"><a
                        href="https://www.facebook.com/people/Cotillon-San-Martin/100064042417602/?locale=pt_BR" target="_blank"
                    ><FaFacebook size={30} /></a></li>
                    <li className="hover:bg-green-300 rounded-full m-1 transition-colors" ><a
                        href="https://wa.me/5492634475135" target="_blank"
                    ><FaWhatsapp size={30} /></a></li>
                    <li className="hover:bg-amber-300 rounded-full m-1 transition-colors" ><a
                        href="https://www.instagram.com/cotillon.sanmartin/" target="_blank"
                    ><FaInstagram size={30} /></a></li>
                    <li className="hover:bg-amber-300 rounded-full m-1 transition-colors" ><Link
                        to='/admin'
                    ><FaTwitter size={30} /></Link></li>
                </ul>
                <p className=" text-center"> &copy; {new Date().getFullYear()} Cotillon San Martin, Inc</p>
            </div>
        </div>
    )
}
