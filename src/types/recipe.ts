import z from 'zod'

export const RecipeSchema = z.object({
    id: z.number(),
    title: z.string(),
    ingredients: z.array(
        z.object({
            quantity: z.string(),
            ingredient:z.string()
        })    
    ),
    preparation: z.array(
        z.object({
            time: z.string(),
            instruction:z.string()
        })
    ),
    imgUrl: z.string(),
    tag:z.string()
})

export const DashboardRecipeSchema = z.array(
    RecipeSchema
)

export type Recipe = z.infer<typeof RecipeSchema>

export type RecipeFormData = Pick<Recipe, "title" | "tag" | "preparation" | "imgUrl" | "ingredients">