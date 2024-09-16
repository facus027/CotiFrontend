import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';
import { Categories } from '../../../types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePriceCategory } from '../../../api/ProductApi';

export type UpdatePrice = {
    category: string,
    percent: number
}

export default function UpdatePriceModal() {

    //Abrir Modal con config en 'ProjectDetailView'
    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const modalTask = queryParams.get('newTask')
    const show = modalTask ? true : false

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            category: "",
            percent: 0
        }
    })

    const queryClient = useQueryClient()
    const { mutate } = useMutation({
        mutationFn: updatePriceCategory,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['products'] })
            toast.success(data)
            navigate('/admin')
        }
    })

    const handleUpdateCategory = (formData: UpdatePrice) => {
        mutate(formData)
    }

    return (
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
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16">
                                    <Dialog.Title
                                        as="h3"
                                        className="font-black text-4xl  my-5"
                                    >
                                        Actualiza Precios por Categoria
                                    </Dialog.Title>

                                    <p className="text-xl font-bold">Llena el formulario y actualiza  {''}
                                        <span className="text-orange-600">Los Precios</span>
                                    </p>

                                    <form
                                        className='mt-10 space-y-3'
                                        onSubmit={handleSubmit(handleUpdateCategory)}
                                        noValidate
                                    >

                                        <div className="mb-5 space-y-3">
                                            <label htmlFor="percent" className="text-sm uppercase font-bold">
                                                Porcentage a actualizar
                                            </label>
                                            <input
                                                id="percent"
                                                type="number"
                                                className="w-full p-3  border border-gray-200"
                                                placeholder="Descripción del Proyecto"
                                                {...register("percent", {
                                                    required: "El Precio del Producto es obligatorio",
                                                })}
                                            />

                                            {errors.percent && (
                                                <ErrorMessage>{errors.percent.message}</ErrorMessage>
                                            )}
                                        </div>


                                        <div className="mb-5 space-y-3 gap-5 flex">
                                            <label htmlFor="category" className="text-sm uppercase font-bold">
                                                Categoria del producto
                                            </label>
                                            <select id="category"
                                                {...register("category", {
                                                    required: "La Categoria del Producto es obligatorio",
                                                })}>
                                                <option value="" className='uppercase'>Seleccione Categoria</option>

                                                {Categories.map(category => (
                                                    <option key={category} className='uppercase' value={category}>{category}</option>
                                                ))}
                                            </select>
                                        </div>


                                        <input
                                            type="submit"
                                            value="Actualizar Precios"
                                            className="bg-orange-light hover:bg-orange-dark rounded-lg w-full p-3 text-white uppercase
         font-bold cursor-pointer transition-colors"
                                        />
                                    </form>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
