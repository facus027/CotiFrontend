import api from "../lib/axios";
import { isAxiosError } from "axios";
import { Recipe, RecipeFormData,  DashboardRecipeSchema,RecipeSchema } from "../types/recipe";

export async function getAllRecipe() {

    try {
        const { data } = await api.get<Recipe[]>('/api/recipes');
        const response = DashboardRecipeSchema.safeParse(data);
        if (response.success) {
            return response.data
        }

    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
    
}

export async function getRecipeById( id : Recipe['id']) {
    try {
        const { data } = await api.get(`/api/recipes/${id}`);
        const response = RecipeSchema.safeParse(data);
        if (response.success) {
            return response.data
        }
       
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function createRecipe( formData : RecipeFormData) {
    try {
        const { data } = await api.post('/api/recipes', formData);
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

type RecipeAPIType={
    formData: RecipeFormData
    recipeId: Recipe['id']
}

export async function updateRecipe({formData,recipeId}:RecipeAPIType){
try {
   const { data } = await api.put<string>(`/api/recipes/${recipeId}`,formData);
   return data
} catch (error) {
    if(isAxiosError(error) && error.response){
        throw new Error(error.response.data.error)
    }
}
}

export async function deleteRecipe(recipeId : Recipe['id']){
    try {
       const { data } = await api.delete<string>(`/api/recipes/${recipeId}`);
       return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}