import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { ProductEditFormData } from "../../../types";
import { Product } from "../../../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "../../../api/ProductApi";
import { toast } from "react-toastify";
import ProductEditForm from "./ProductEditForm";


type EditProductFormProps = {
    product: Product
    productId: Product['id']
}

export default function EditProductsForm({ product, productId }: EditProductFormProps) {

    const navigate = useNavigate()




    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category
        }
    })


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

    const handleForm = (formData: ProductEditFormData) => {

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



                <form
                    // @ts-ignore
                    onSubmit={handleSubmit(handleForm)}
                    noValidate
                >


                    <ProductEditForm register={register} errors={errors} />

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
