
import Logo from "./ui/Logo";
import SearchPRoducts from "./SearchPRoducts";


export default function Header() {
    return (
        <header className=" py-2 bg-transparent border-t-2 rounded-xl w-full shadow-xl shadow-yellow-200 top-0 y left-0 z-10 ">
            <div className=" flex flex-col lg:flex-row justify-around items-center mx-auto">
                <div className=" ml-7">
                    <Logo />
                </div>
                <div className=" w-2/5">
                    <SearchPRoducts />
                </div>
                <div className="">
                    <ul className="flex flex-row h-20 items-center justify-between text-xl text-center uppercase">
                        <li className="menu-item">
                            <a className="menu-item-a" href="/">FAQ</a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-item-a" href="/products">Productos</a>
                        </li>

                    </ul>
                </div>
            </div>

        </header>
    )
}
