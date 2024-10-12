import { useNavigate } from "react-router-dom";
import { Recipe } from "../../types/recipe";
import { FaEye } from "react-icons/fa";


export default function RecipeCard({ recipe }: { recipe: Recipe }) {
    const navigate = useNavigate()
    return (
        <>
            <div className="max-w-sm sm:max-w-md lg:max-w-lg rounded overflow-hidden shadow-lg bg-white mx-auto">
                <div className="overflow-hidden relative">
                    <img
                        className="w-full h-48 sm:h-64 lg:h-72 object-cover hover:scale-110 transition-transform duration-300 hover:rotate-2"
                        src={recipe.imgUrl}
                        alt={`imagenDe${recipe.title}`}
                    />
                    <div className="absolute top-0 right-0">
                        <img
                            className="w-20 sm:w-28 h-10 sm:h-14"
                            alt="Logotipo CotillonSm"
                            src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1720015148/aje7gfpd898we6jjj07i.png"
                        />
                    </div>
                </div>

                <div className="px-4 py-4">
                    <h1 className="font-bold font-gloria text-md sm:text-lg lg:text-xl mb-1 text-center">{recipe.title}</h1>
                    <p className="text-gray-700 font-baloo text-center text-sm sm:text-base">{recipe.tag}</p>
                </div>

                <div className="px-4 pb-2">
                    <div className="flex gap-1 justify-between items-center mx-auto">
                        <button
                            onClick={() => navigate(location.pathname + '?seeRecipe=true' + `&recipeId=${recipe.id}`)}
                            className="bg-amber-500 w-full sm:w-2/3 text-white font-chewy text-sm sm:text-lg tracking-wider py-1 px-4 rounded hover:bg-amber-700 flex items-center justify-center gap-1">
                            ver <FaEye />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
