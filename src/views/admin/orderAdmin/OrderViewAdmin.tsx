import { useQuery } from "@tanstack/react-query"
import { getOrderByPendiente } from "../../../api/OrderApi"
import OrderDetaildAdmin from "../../../components/admin/order/OrderDetaildAdmin"
import { useParams } from "react-router-dom"
import StatusSidebarAdmin from "../../../components/admin/order/StatusSidebarAdmin"



export default function OrderViewAdmin() {

    const params = useParams()
    const status = params.status!

    const { data, isLoading } = useQuery({
        queryKey: ['ordersAdmin', status],
        queryFn: () => getOrderByPendiente(status)
    })

    if (isLoading) return 'Cargando.....'

    if (data) return (
        <>
            <aside className=" lg:w-72 lg:h-screen bg-white pt-4 fixed flex">
                <StatusSidebarAdmin />
            </aside>
            <div className="max-h-screen w-2/3 bg-gray-100 items-center justify-center ml-96">
                {data.map(order => (
                    <div key={order.id}>
                        <OrderDetaildAdmin data={order} />
                    </div>

                ))}

            </div>
        </>
    )
}
