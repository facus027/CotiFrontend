import { Link } from "react-router-dom";
import Logo from "./ui/Logo";
import SearchPRoducts from "./SearchPRoducts";



export default function Header() {
    return (
        <header className=" py-2 bg-transparent border-t-2 rounded-xl w-full fixed shadow-xl top-0 y left-0 z-10 ">
            <div className=" flex flex-col lg:flex-row justify-between items-center mx-auto">
                <div className=" shadow-2xl mx-5">
                    <Logo />
                </div>
                <div className=" border border-gray-400 w-2/5">
                    <SearchPRoducts />
                </div>
                <div className="">
                    <ul className=" mx-auto flex flex-col lg:flex-row justify-between gap-5">
                        <li>FAQ</li>
                        <li className="text-black font-sans ">
                            <Link to={'/products'}>
                                Productos
                            </Link>
                        </li>
                        <li className=" mx-5">Carrito</li>
                    </ul>
                </div>
            </div>

        </header>
    )
}
