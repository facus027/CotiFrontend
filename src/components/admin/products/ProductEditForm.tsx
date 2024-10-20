import ErrorMessage from "../ErrorMessage";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Categories, ProductEditFormData } from "../../../types";


type ProjectFormProps = {
    register: UseFormRegister<ProductEditFormData>
    errors: FieldErrors<ProductEditFormData>
};

export default function ProductEditForm({ register, errors }: ProjectFormProps) {
    return (
        <>
            <div className="mb-5 space-y-3">
                <label htmlFor="name" className="text-sm uppercase font-bold">
                    Nombre del Producto
                </label>
                <input
                    id="name"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Nombre del Producto"
                    {...register("name", {
                        required: "El Nombre del Producto es obligatorio",
                    })}
                />

                {errors.name && (
                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="description" className="text-sm uppercase font-bold">
                    Descripcion del Producto
                </label>
                <textarea
                    id="description"
                    className="w-full p-3  border border-gray-200"
                    placeholder="Descripcion del producto"
                    {...register("description", {
                        required: "La descripcion del Producto es obligatorio",
                    })}
                />

                {errors.description && (
                    <ErrorMessage>{errors.description.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="price" className="text-sm uppercase font-bold">
                    Precio del Producto
                </label>
                <input
                    id="price"
                    type="number"
                    className="w-full p-3  border border-gray-200"
                    placeholder="Descripción del Proyecto"
                    {...register("price", {
                        required: "El Precio del Producto es obligatorio",
                    })}
                />

                {errors.price && (
                    <ErrorMessage>{errors.price.message}</ErrorMessage>
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
                    <option value="" className="uppercase">Seleccione Categoria</option>

                    {Categories.map(category => (
                        <option key={category} className="uppercase" value={category}>{category}</option>
                    ))}
                </select>
            </div>
        </>
    );
}