import z  from 'zod'

export const CategoriesSchema = z.enum(['reposteria','decoracion','carnaval','globos','golosinas','souvenirs','decoracion Torta','combos','fiestas Patrias','disfraces', ""])

export const Categories = ['reposteria','decoracion','carnaval','globos','golosinas','souvenirs','decoracion Torta','combos','fiestas Patrias','disfraces','pascua']

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

export type ProductEditFormData = Pick<Product, 'name' | 'description' | 'category' | 'price'>

export const ImageSchemma = z.string()

export type OrderItems = Pick<Product, 'id' | 'name' | 'image' | 'price'|'description'|'category'> & {
    quantity: number,
    subtotal:number
}

export type Order = {
    id:number
    name: string, 
    date:Date,
    cel: string,
    total: number,
    wayToPay: string,
    status:string,
    order:OrderItems[]
}

export type OrderFormData = Pick<Order, 'name' | 'cel'|'wayToPay'>

export type OrderType = z.infer<typeof OrderSchema>

export const OrderSchema = z.object({
    id:z.number(),
    name: z.string(),
    date:z.date(),
    cel: z.string(),
    total: z.number(),
    wayToPay: z.string(),
    status:z.string(),
    order: z.array(
        z.object({
            id: z.number(),
            name: z.string(),
            image: z.string(),
            price: z.number(),
            quantity: z.number(),
            subtotal: z.number(),
            description:z.string()
        })
    )
})

export const DashboardOrderSchema = z.array( OrderSchema)

export type ProductsDemo = {
        id: number,
        name: string,
        description: string,
        price: number,
        availability: boolean,
        image: string,
        category: string    
}

    



