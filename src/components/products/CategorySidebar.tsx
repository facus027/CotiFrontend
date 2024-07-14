import { Link, useParams } from "react-router-dom";
import { Categories } from "../../types";


export default function CategorySidebar() {
    const params = useParams()
    return (
        <aside className=" md:w-72 lg:h-screen bg-white pt-1 -mt-32 text-sm">
            <h1 className=" border border-t-2 content-center py-2 justify-center flex"><Link to={'/products'}>Categorias</Link></h1>
            {Categories.map(category => (
                <ul key={category} className={`${category === params.category ? 'bg-amber-400' : ''} flex items-center uppercase gap-2 w-full border-t border-gray-200 p-3 last-of-type:border-b`}>
                    <Link to={`/products/${category}`}>{category}</Link>
                </ul>
            ))}
        </aside>
    )
}
