import { Link } from "react-router-dom";
import CreateRecipeForm from "../../../components/recipes/CreateRecipeForm";

export default function RecipeCreateView() {
    return (
        <>
            <div className=" max-w-3xl mx-auto">
                <h1 className="text-3xl font-black -mt-5">Crear Receta</h1>

                <nav className="my-5">
                    <Link
                        className="border border-gray-200 text-black rounded-lg shadow-xl hover:bg-oreange-pastel px-10 p-1 text-sm 
                        font-bold cursor-pointer transition-colors"
                        to="/admin"
                    >
                        Volver a Productos
                    </Link>
                </nav>
                <p className="text-xl font-light text-gray-500 mt-2">
                    Llena el siguiente formulario para crear una Receta
                </p>
                <div className="mt-5">
                    <CreateRecipeForm />
                </div>
            </div>
        </>
    )
}
