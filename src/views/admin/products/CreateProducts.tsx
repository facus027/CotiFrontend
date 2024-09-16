import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import FormProducts from '../../../components/admin/products/FormProducts'
import { ProductFormData } from "../../../types";
import { createProduct } from "../../../api/ProductApi";
import { toast } from "react-toastify";
import ImageUpload from "../../../components/admin/products/ImageUpload";
import ErrorMessage from "../../../components/admin/ErrorMessage";


export default function CreateProducts() {

  const navigate = useNavigate()

  const [imagen, setImagen] = useState("")


  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      image: "",
      category: ""
    }
  })

  useEffect(() => {
    setValue('image', imagen);
  }, [imagen]);

  const { mutate } = useMutation({
    mutationFn: createProduct,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      toast.success(data)
      navigate('/admin')
    }
  })

  const handleImage = (imageUrl: string) => {
    setImagen(imageUrl)
  }


  const handleForm = (formData: ProductFormData) => mutate(formData)

  return (
    <>

      <div className=" max-w-3xl mx-auto">
        <h1 className="text-3xl font-black -mt-5">Crear Producto</h1>

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
          Llena el siguiente formulario para crear un Producto
        </p>

        <div className="mt-7 bg-white shadow-lg p-10 rounder-lg">

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
              value="Crear Producto"
              className=" bg-orange-light hover:bg-orange-dark rounded-lg w-full p-3 text-white uppercase
         font-bold cursor-pointer transition-colors"
            />
          </form>
        </div>
      </div>
    </>
  )
}
