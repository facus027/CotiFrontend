import api from "../lib/axios";
import { isAxiosError } from "axios";
import { DashboardProductSchema, Product, ProductFormData} from "../types";
import { UpdatePrice } from "../components/admin/products/UpdatePriceModal";

export async function uploadImage(formData:FormData) {
    try {
        
        const response = await api.post(
            'products/upload',
            formData,
            {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              }
        );
        console.log(response.data)
        return response.data.imageUrl
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function createProduct( formData : ProductFormData) {
    try {
        const { data } = await api.post('/products', formData);
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getAllProduct() {

    try {
        const { data } = await api.get('/products');
        const response = DashboardProductSchema.safeParse(data);
        if (response.success) {
            return response.data
        }

    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
    
}

export async function updateAvailabilityProduct( id : Product['id']) {
    try {
        const { data } = await api.patch(`/products/${id}`);
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getProductById( id : Product['id']) {
    try {
        const { data } = await api.get(`/products/${id}`);
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

type ProductAPIType={
    formData: ProductFormData
    productId: Product['id']
}

export async function updateProduct({formData,productId}:ProductAPIType){
try {
   const { data } = await api.put<string>(`products/${productId}`,formData);
   return data
} catch (error) {
    if(isAxiosError(error) && error.response){
        throw new Error(error.response.data.error)
    }
}
}

export async function deleteProduct(productId : Product['id']){
    try {
       const { data } = await api.delete<string>(`products/${productId}`);
       return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}
    
export async function updatePriceCategory(formData: UpdatePrice) {
    try {
        const { data } = await api.post<string>(`/products/updateCategory`, formData);
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getProductsByCategory(category : string) {

    try {
        const { data } = await api.get(`/products/categoria/${category}`);
        const response = DashboardProductSchema.safeParse(data);
        if (response.success) {
            return response.data
        }

    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
    
}