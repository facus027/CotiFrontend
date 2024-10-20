import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getAllRecipe } from "../../api/RecipeApi";
import RecipeCard from "./RecipeCard";


export default function RecipeViewHome() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const productsPerPage = 4;

    const { data: recipesData } = useQuery({
        queryKey: ['recipesHome'],
        queryFn: getAllRecipe,
        retry: false,
    });

    // Asegurarse de que "recipesData" sea siempre un array
    const recipes = recipesData ?? [];

    // Cambia automáticamente cada 5 segundos, avanzando de a 5 productos
    useEffect(() => {
        if (recipes.length === 0) return;

        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + productsPerPage) % recipes.length
            );
        }, 5000);

        return () => clearInterval(intervalId);
    }, [recipes.length]);

    // Calcula el grupo de productos que se debe mostrar
    const getVisibleProducts = () => {
        if (recipes.length === 0) return [];

        const visibleProducts = recipes.slice(currentIndex, currentIndex + productsPerPage);

        // Si quedan menos de 6 productos al final de la lista, concatenar desde el inicio para completar
        if (visibleProducts.length < productsPerPage) {
            return [...visibleProducts, ...recipes.slice(0, productsPerPage - visibleProducts.length)];
        }
        return visibleProducts;
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 m-7 gap-5">
            {getVisibleProducts().map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );

}
