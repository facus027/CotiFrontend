import z from 'zod'

export const CategoriesSchema = z.enum(['reposteria','decoracion','carnaval','globos','golosinas','souvenirs','decoracion Torta','combos','fiestas Patrias','disfrases', ""])

export const Categories = ['reposteria','decoracion','carnaval','globos','golosinas','souvenirs','decoracion Torta','combos','fiestas Patrias','disfrases']

export const ProductSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    price: z.number(),
    availability: z.boolean(),
    image: z.string(),
    category: z.string(),
})

export const DashboardProductSchema = z.array(
    ProductSchema.pick({
        id: true,
        name: true,
        description: true,
        price: true,
        availability: true,
        image: true,
       category:true
    })
)

export const EditProductSchema = ProductSchema.pick({
        name: true,
        description: true,
        price: true,
        availability: true,
        image: true,
        category:true
})

export type Product = z.infer<typeof ProductSchema>

export type ProductFormData = Pick<Product, 'name' | 'description' | 'category' | 'image' | 'price'>

export const ImageSchemma = z.string()

export type OrderItems = Pick<Product, 'id' | 'name' | 'image' | 'price'> & {
    quantity: number,
    subtotal:number
}



