import api from "../lib/axios";
import { isAxiosError } from "axios";
import {  Order, OrderFormData } from "../types";

export async function createOrder(formData:OrderFormData) {
    try {
        
       
            const {data} = await api.post<string>('/api/order',formData);
            return data
       
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getOrderByCel(cel : Order['cel']) {
    try {
        const { data } = await api.get(`/api/order/cel/${cel}`)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

type updateStatusByIdProps = {
    id: number,
    status:string
}

export async function updateStatusById({id,status}:updateStatusByIdProps) {
    try {
        const { data } = await api.put<string>(`/api/order/status/${id}`, status)
        console.log(data)
        return data;

    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        } 
    }
}

export async function getOrderByPendiente(status:string) {
    try {

        const { data } = await api.get<Order[]>(`/api/order/status/${status}`)
        return data  
       
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}