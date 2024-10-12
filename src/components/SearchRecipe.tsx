import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { getAllRecipe } from "../api/RecipeApi";


export default function SearchRecipe() {

    const [searchTerm, setSearchTerm] = useState('');
    const MAX_SEARCH = 4


    const handleSearchChange = (e: any) => {
        setSearchTerm(e.target.value);
    };

    const { data, isLoading } = useQuery({
        queryKey: ["recipeSearch"],
        queryFn: getAllRecipe
    })

    if (isLoading) return "Cargando..."

    if (data) return (
        <>

            <div className="w-96 bg-gray-100 flex -mr-32 flex-row items-center justify-center border border-amber-300 rounded-2xl p-3 gap-3 hover:border-yellow-600">
                <div className="flex flex-row gap-4">

                    <IoSearchSharp size={30} />

                    <div className="w-80 mx-auto justify-center">
                        <input
                            type="text"
                            className="w-full p-2 rounded-2xl font-baloo"
                            placeholder="¿Que ingrediente tienes? Nombre Receta"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
            </div>
            <div className=" absolute w-2/3 lg:w-1/3 bg-white rounded-2xl">
                {
                    searchTerm && data?.filter(recipe =>
                        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        recipe.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        searchTerm === ''
                    ).slice(0, MAX_SEARCH)
                        .map(recipe => (
                            <div key={recipe.id} className="flex flex-col justify-center z-40 items-center p-1 border-b rounded-xl border-gray-400">
                                <ul>
                                    <li className="font-baloo ">

                                        <Link className=" relative"
                                            to={`/recetas?seeRecipe=true&recipeId=${recipe.id}`}>
                                            {recipe.title}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        ))
                }
            </div>
        </>
    )
}
