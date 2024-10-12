import { useForm, useFieldArray } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query'
import { createRecipe } from '../../api/RecipeApi';
import { RecipeFormData } from '../../types/recipe';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function CreateRecipeForm() {

    const navigate = useNavigate()

    const { register, handleSubmit, control, reset } = useForm({
        defaultValues: {
            title: '',
            imgUrl: '',
            tag: '',
            ingredients: [{ quantity: '', ingredient: '' }],
            preparation: [{ instruction: '', time: '' }],
        },
    });

    // Para gestionar arrays en el formulario (ingredientes y pasos)
    const { fields: ingredientFields, append: addIngredient } = useFieldArray({
        control,
        name: 'ingredients',
    });

    const { fields: preparationFields, append: addStep } = useFieldArray({
        control,
        name: 'preparation',
    });


    // Crear la mutación usando useMutation
    const { mutate } = useMutation({
        mutationFn: createRecipe,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            reset()
            navigate('/admin')
        }
    })

    const handleForm = (formData: RecipeFormData) => mutate(formData)


    return (
        <>
            <form
                className='flex flex-col gap-3'
                // @ts-ignore
                onSubmit={handleSubmit(handleForm)}
                noValidate>

                <div className='flex gap-5 text-lg font-chewy'>
                    <label htmlFor="title">Título de la Receta:</label>
                    <input className='rounded-xl'
                        id="title" {...register('title', { required: true })} />
                </div>

                <div className='flex gap-5 text-lg font-chewy'>
                    <label htmlFor="imgUrl">URL de la Imagen:</label>
                    <input className='rounded-xl'
                        id="imgUrl" {...register('imgUrl')} />
                </div>

                <div className='flex gap-5 text-lg font-chewy'>
                    <label htmlFor="tag">Etiqueta:</label>
                    <input className='rounded-xl'
                        id="tag" {...register('tag')} />
                </div>

                <h2 className="font-luckiest tracking-wider">Ingredientes:</h2>
                {ingredientFields.map((field, index) => (
                    <div key={field.id} className='flex gap-5 text-md font-chewy'>
                        <input
                            {...register(`ingredients.${index}.quantity`, { required: true })}
                            placeholder="Cantidad Ej:100g"
                        />
                        <input
                            {...register(`ingredients.${index}.ingredient`, { required: true })}
                            placeholder="Ingrediente Ej:Azucar"
                        />
                    </div>
                ))}
                <button className='bg-yellow-pastel p-1 rounded-3xl w-1/4 '
                    type="button" onClick={() => addIngredient({ quantity: '', ingredient: '' })}>
                    Añadir Ingrediente +
                </button>

                <h2 className="font-luckiest tracking-wider">Preparación:</h2>
                {preparationFields.map((field, index) => (
                    <div key={field.id} className='flex gap-5 text-md font-chewy'>
                        <input
                            {...register(`preparation.${index}.instruction`, { required: true })}
                            placeholder="Instrucción"
                        />
                        <input
                            {...register(`preparation.${index}.time`, { required: true })}
                            placeholder="Tiempo Ej:7 Min"
                        />
                    </div>
                ))}
                <button className='bg-yellow-pastel p-1 rounded-3xl w-1/4 '
                    type="button" onClick={() => addStep({ instruction: '', time: '' })}>
                    Añadir Paso +
                </button>

                <button className='bg-orange-dark hover:bg-orange-light p-2 rounded-3xl w-2/3 font-luckiest tracking-wider'
                    type="submit">Crear Receta</button>
            </form>
        </>
    )
}
