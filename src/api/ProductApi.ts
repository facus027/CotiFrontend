import api from "../lib/axios";
import { isAxiosError } from "axios";
import { DashboardProductSchema, Product, ProductFormData} from "../types";
import { UpdatePrice } from "../components/admin/products/UpdatePriceModal";

export async function uploadImage(formData:FormData) {
    try {
        
        const response = await api.post(
            '/api/products/upload',
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

type PaginationProps = {
    totalItems:number,
    totalPages:number,
    currentPage:number,
    products:Product[],
}

export const fetchProducts = async (page: number, pageSize: number) => {
    const { data } = await api.get<PaginationProps>('/api/products/pagina', {
      params: { page, pageSize },
    });
    console.log(data)
    return data;
  };

export async function createProduct( formData : ProductFormData) {
    try {
        const { data } = await api.post<string>('/api/products', formData);
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getAllProduct() {

    try {
        const { data } = await api.get('/api/products');
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
        const { data } = await api.patch(`/api/products/${id}`);
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getProductById( id : Product['id']) {
    try {
        const { data } = await api.get(`/api/products/${id}`);
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
   const { data } = await api.put<string>(`/api/products/${productId}`,formData);
   return data
} catch (error) {
    if(isAxiosError(error) && error.response){
        throw new Error(error.response.data.error)
    }
}
}

export async function deleteProduct(productId : Product['id']){
    try {
       const { data } = await api.delete<string>(`/api/products/${productId}`);
       return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}
    
export async function updatePriceCategory(formData: UpdatePrice) {
    try {
        const { data } = await api.post<string>(`/api/products/updateCategory`, formData);
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getProductsByCategory(category : string) {

    try {
        const { data } = await api.get(`/api/products/categoria/${category}`);
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