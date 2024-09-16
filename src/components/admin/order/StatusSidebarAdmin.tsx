import { Link, useParams } from "react-router-dom"

export default function StatusSidebarAdmin() {

    const status = ['pendiente', 'pagado', 'para retirar', 'entregado']

    const params = useParams()

    return (
        <div className="w-full">
            {status.map(estado => (
                <ul key={estado} className={`${estado === params.status ? 'bg-amber-400' : ''} flex items-center uppercase gap-2 w-full border-t border-gray-200 p-3 last-of-type:border-b`}>
                    <Link to={`/admin/order/${estado}`}>{estado}</Link>
                </ul>
            ))}
        </div>
    )
}
