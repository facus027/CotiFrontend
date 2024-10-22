import { useQuery } from "@tanstack/react-query";
import { useParams, Navigate } from "react-router-dom"
import { getProductById } from "../../../api/ProductApi";
import EditProductsForm from "../../../components/admin/products/EditProductForm";
import SpinnerLogo from "../../../components/ui/SpinnerLogo";


export default function EditProductsView() {

    const param = useParams();
    const productId = param.productId;

    const { data, isLoading, isError } = useQuery({
        queryKey: ['editProduct', productId],
        queryFn: () => getProductById(+productId!),
        retry: false
    })

    if (isLoading) return <SpinnerLogo />
    if (isError) return <Navigate to='/404' />
    if (data) return <EditProductsForm product={data} productId={+productId!} />
}
