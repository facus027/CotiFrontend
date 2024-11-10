import { Link, useParams } from "react-router-dom";
import { cardsCategorie } from '../../data/index'


export default function CategorySidebar() {
    const params = useParams()
    return (
        <aside className=" md:w-72 lg:h-screen bg-white pt-1 -mt-36 ">
            <h1 className=" border border-t-2 content-center py-1 text-3xl tracking-wider uppercase font-luckiest justify-center flex">
                <Link to={'/products'}>Categorias</Link>
            </h1>
            {cardsCategorie.map(category => (
                <ul key={category.name} className={`${category.name === params.category ? 'bg-oreange-pastel' : ''} flex items-center justify-between uppercase gap-2 w-full border-t border-gray-200 p-2 last-of-type:border-b`}>
                    <Link className="font-chewy ml-2 text-2xl tracking-wide hover:scale-125 transition duration-200" to={`/products/${category.img}`}>
                        <h2>{category.name}</h2>
                    </Link>
                    <img className="h-9" src={category.icons} alt={`icon_${category.icons}`} />
                </ul>
            ))}
        </aside>
    )
}
