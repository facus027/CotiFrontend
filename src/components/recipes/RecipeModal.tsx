import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useLocation, useNavigate } from "react-router-dom"
import { useQuery } from '@tanstack/react-query';
import { getRecipeById } from '../../api/RecipeApi';



export default function RecipeDetailModal() {


    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const seeRecipe = queryParams.get('seeRecipe')
    const show = seeRecipe ? true : false
    const recipeId = queryParams.get('recipeId')

    const { data, isLoading } = useQuery({
        queryKey: ['seeRecipe', recipeId],
        queryFn: () => getRecipeById(+recipeId!)
    })
    const recipe = data

    if (isLoading) return 'Cargando...'
    if (data) return (
        <>
            <Transition appear show={show} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => navigate(location.pathname, { replace: true })}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/60" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-20 items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-2 z-50">
                                    <Dialog.Title
                                        as="h3"
                                        className="font-black text-3xl "
                                    >

                                    </Dialog.Title>
                                    <div className="absolute -ml-5">
                                        <img className="w-64 h-32" alt="Logotipo CotillonSm" src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1720015148/aje7gfpd898we6jjj07i.png" />
                                    </div>
                                    <div className=" min-h-44 bg-gray-100 flex items-center justify-center p-4 ">
                                        <div className="max-w-4xl w-full bg-white rounded overflow-hidden shadow-lg">
                                            <div>
                                                <img className=" w-64 h-64 justify-center items-center mx-auto bg-cover" src={recipe?.imgUrl} alt={`imagenDe${recipe?.title}`} />
                                            </div>
                                            <div className="p-6">
                                                <div className='flex gap-5'>
                                                    <h1 className="text-3xl font-gloria font-bold mb-4">{recipe?.title}</h1>
                                                    <p className="text-gray-700 font-baloo text-base">({recipe?.tag})</p>
                                                </div>
                                                <h1 className='text-xl font-luckiest tracking-wider text-center mb-3'>
                                                    Ingredientes
                                                </h1>
                                                <ul >
                                                    {recipe?.ingredients.map(ingredient => (
                                                        <li className='flex font-luckiest'
                                                            key={ingredient.ingredient}>
                                                            {ingredient.quantity}
                                                            <span className='ml-7 font-chewy font-light'>{ingredient.ingredient}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <h1 className='text-xl font-luckiest tracking-wider text-center mb-3'>
                                                    Preparacion
                                                </h1>
                                                <ul className='space-y-1'>
                                                    {recipe?.preparation.map((preparation, index) => (
                                                        <li className='flex font-chewy text-lg w-11/12 lg:items-start lg:justify-start items-center justify-center'
                                                            key={index}>
                                                            *{" "} {preparation.instruction}
                                                            <span className='text-sm p-1 h-auto text-center lg:text-end rounded-2xl border-yellow-light border-2 ml-7 font-chewy font-light'>{preparation.time}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                            </div>
                                        </div>
                                    </div>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
