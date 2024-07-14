import { Link, useNavigate } from "react-router-dom";
import ImageUpload from "../../../components/admin/products/ImageUpload";
import { useForm } from 'react-hook-form'
import { ProductFormData } from "../../../types";
import { useEffect, useState } from "react";
import FormProducts from '../../../components/admin/products/FormProducts'
import { Product } from "../../../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "../../../api/ProductApi";
import { toast } from "react-toastify";
import ErrorMessage from "../ErrorMessage";

type EditProductFormProps = {
    product: Product
    productId: Product['id']
}

export default function EditProductsForm({ product, productId }: EditProductFormProps) {

    const navigate = useNavigate()

    const [imagen, setImagen] = useState("")


    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {
            name: product.name,
            description: product.description,
            price: product.price,
            image: product.image,
            category: product.category
        }
    })

    useEffect(() => {
        setValue('image', imagen);
    }, [imagen]);

    const handleImage = (imageUrl: string) => {
        setImagen(imageUrl)
    }

    const queryClien = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: updateProduct,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            queryClien.invalidateQueries({ queryKey: ['products'] })
            queryClien.invalidateQueries({ queryKey: ['editProduct'] })
            toast.success(data)
            navigate('/admin')
        }
    })

    const handleForm = (formData: ProductFormData) => {

        const data = {
            formData,
            productId
        }

        mutate(data)

    }

    return (
        <div className=" max-w-3xl mx-auto">
            <h1 className="text-3xl font-black -mt-5">Editar Producto</h1>

            <nav className="my-5">
                <Link
                    className="border border-gray-200 text-black rounded-lg shadow-xl hover:bg-amber-400 px-10 p-1 text-sm 
                        font-bold cursor-pointer transition-colors"
                    to="/admin"
                >
                    Volver a Productos
                </Link>
            </nav>
            <p className="text-xl font-light text-gray-500 mt-5">
                Llena el siguiente formulario para actualizar '{product.name}'
            </p>

            <div className="mt-10 bg-white shadow-lg p-10 rounder-lg">

                <div className="mb-5 space-y-3 gap-5 flex">
                    <label htmlFor="caegory" className="text-sm uppercase font-bold">
                        Imagen del producto
                    </label>
                    <ImageUpload handleImage={handleImage} />
                </div>

                <form
                    // @ts-ignore
                    onSubmit={handleSubmit(handleForm)}
                    noValidate
                >

                    <input
                        type="hidden"
                        {...register("image", {
                            required: "La imagen del Producto es obligatorio",
                        })}
                    />
                    {errors.image && (
                        <ErrorMessage>{errors.image.message}</ErrorMessage>
                    )}

                    <FormProducts register={register} errors={errors} />

                    <input
                        type="submit"
                        value="Actualizar Producto"
                        className=" bg-orange-600 hover:bg-orange-700 w-full p-3 text-white uppercase
                          font-bold cursor-pointer transition-colors"
                    />
                </form>
            </div>
        </div>
    )
}
