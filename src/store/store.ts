import { create } from 'zustand'
import { OrderItems, Product } from '../types'
import { persist } from 'zustand/middleware';


interface Store {
    order: OrderItems[]
    addToOrder: (product: Product) => void
    increaseQuantity: (id: Product['id']) => void
    decreaseQuantity: (id: Product['id']) => void
    removeItems : (id: Product['id']) => void
}

const discountCategory = 'carnaval'
const perctDiscount = 10

export const useStore = create<Store>()(
    persist(
        (set, get) => ({
                    order: [],

                    addToOrder: (product) => {
                        const { availability, category, ...data } = product;
                        const currentOrder = get().order; // Obtener el estado actual
                        let order;
                    
                        // Verifica si el producto ya está en el pedido
                        if (currentOrder.find(item => item.id === product.id)) {
                            // Actualiza la cantidad y subtotal si el producto ya existe en el pedido
                            order = currentOrder.map(item => item.id === product.id ? {
                                ...item,
                                quantity: item.quantity + 1,
                                subtotal: item.price * (item.quantity + 1),
                            } : item);
                        } else {
                            // Agrega el producto al pedido si no existe ya
                            order = [...currentOrder, {
                                ...data,
                                category, // Mantén la categoría para el cálculo de descuentos
                                quantity: 1,
                                subtotal: 1 * product.price,
                            }];
                        }
                    
                        set(() => ({ order }));
                    },
                    
                    increaseQuantity: (id) => {
                        set((state) => ({
                            order: state.order.map(item => 
                                item.id === id 
                                    ? {
                                        ...item,
                                        quantity: item.quantity + 1,
                                        subtotal: item.category === discountCategory 
                                            ? (item.price * (1 - perctDiscount / 100)) * (item.quantity + 1)
                                            : item.price * (item.quantity + 1)
                                    } 
                                    : item
                            )
                        }));
                    },
                    decreaseQuantity: (id) => {
                        set((state) => ({
                            order: state.order.map(item =>
                                item.id === id 
                                    ? {
                                        ...item,
                                        quantity: item.quantity - 1,
                                        subtotal: item.category === discountCategory 
                                            ? (item.price * (1 - perctDiscount / 100)) * (item.quantity - 1)
                                            : item.price * (item.quantity - 1)
                                    }
                                    : item
                            )
                        }));
                    },
                    
    removeItems: (id) => {
        set((state) => ({
            order: state.order.filter(item=>item.id !== id)
        }))
    },
        }), {
            name: 'order-storage', // Nombre en Local Storage

    })
)