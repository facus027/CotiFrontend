import { useQuery } from "@tanstack/react-query";
import SearchRecipe from "../../components/SearchRecipe";
import { getAllRecipe } from "../../api/RecipeApi";
import RecipeCard from "../../components/recipes/RecipeCard";
import SpinnerLogo from "../../components/ui/SpinnerLogo";


export default function RecipeView() {

    const { data, isLoading } = useQuery({
        queryKey: ["recipes"],
        queryFn: getAllRecipe
    })

    if (isLoading) return <SpinnerLogo />

    if (data) return (
        <>
            <div className="mt-10 ml-5 sm:ml-0">
                <div>
                    <h1 className="text-4xl ml-5 sm:text-5xl md:text-6xl font-luckiest tracking-wider mb-5 text-center md:text-left">
                        Recetas
                    </h1>
                    <p className="ml-0 sm:ml-10 text-lg sm:text-xl font-chewy flex flex-col text-center md:text-left">
                        Hola... queremos ofrecerte nuestro glosario de recetas, para que no pierdas tiempo en buscarlas y te concentres
                        en lo más importante...
                        <span className="text-2xl sm:text-3xl font-extrabold tracking-wider">
                            ¡Festejar!
                        </span>
                    </p>
                </div>

                <div className="mb-10  mt-5">
                    <h2 className="text-center font-luckiest text-xl sm:text-2xl">Buscador de Recetas</h2>
                    <div className="ml-0 sm:ml-16">
                        <SearchRecipe />
                    </div>
                </div>
                <h2 className="text-center font-luckiest text-xl sm:text-2xl mb-12">Todas las Recetas</h2>
                <div className="bg-slate-100 rounded-3xl p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
                    {data.map(recipe => (
                        <div key={recipe.id}>
                            <RecipeCard recipe={recipe} />
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
