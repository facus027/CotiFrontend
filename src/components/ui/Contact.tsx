import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <>
            <div className="w-2/5 py-5 rounded-lg items-center mb-5">
                <div className="justify-center items-center">
                    <ul className="justify-center items-center text-3xl flex flex-col lg:flex-row gap-10">
                        <Link to={"https://www.facebook.com/people/Cotillon-San-Martin/100064042417602/?locale=pt_BR"} target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row gap-5 bg-blue-700 border-slate-200 p-3 rounded-2xl group">
                            <span className="hidden group-hover:block text-lg font-chewy">Sigenos..</span>
                            <FaFacebook size={30} />
                            Facebook
                        </Link>
                        <Link to={"https://wa.me/5492634475135"} target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-5 bg-green-500 border-slate-200 p-3 rounded-2xl group">
                            <span className="hidden group-hover:block text-lg font-chewy">Agendanos..</span>
                            <FaWhatsapp size={30} />
                            WahtsApp
                        </Link>
                        <Link to={"https://www.instagram.com/cotillon.sanmartin/"} target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-5 bg-amber-500 border-slate-200 p-3 rounded-2xl group">
                            <span className="hidden group-hover:block text-lg font-chewy">Sigenos..</span>
                            <FaInstagram size={30} />
                            Instagram
                        </Link>
                    </ul>
                </div>
            </div>

        </>
    )
}
