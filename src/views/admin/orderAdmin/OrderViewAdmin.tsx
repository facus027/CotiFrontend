import { useQuery } from "@tanstack/react-query"
import { getOrderByPendiente } from "../../../api/OrderApi"
import OrderDetaildAdmin from "../../../components/admin/order/OrderDetaildAdmin"
import { useParams } from "react-router-dom"
import StatusSidebarAdmin from "../../../components/admin/order/StatusSidebarAdmin"
import SpinnerLogo from "../../../components/ui/SpinnerLogo"



export default function OrderViewAdmin() {

    const params = useParams()
    const status = params.status!

    const { data, isLoading } = useQuery({
        queryKey: ['ordersAdmin', status],
        queryFn: () => getOrderByPendiente(status)
    })

    if (isLoading) return <SpinnerLogo />

    return (
        <>
            <aside className=" lg:w-72 lg:max-h-screen bg-white pt-4 fixed flex">
                <StatusSidebarAdmin />
            </aside>
            <div className="max-h-screen w-2/3 bg-gray-100 items-center justify-center ml-96">
                {data?.length !== 0 ? (data?.map(order => (
                    <div key={order.id}>
                        <OrderDetaildAdmin data={order} />
                    </div>

                ))
                ) : (
                    <div className="min-h-screen">
                        <h1>Aún no hay ordenes en la seccion:
                            <span className="uppercase font-bold ml-2">
                                {status}
                            </span>
                        </h1>
                    </div>

                )
                }

            </div>
        </>
    )
}
