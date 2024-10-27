import { Order } from "../../types";
import { formatCurrency } from "../../util";

export default function OrderDetailCheck({ data }: { data: Order }) {

    return (
        <>
            <div className="py-3 bg-transparent border-4 border-t border-orange-400 p-1 rounded-xl w-full shadow-xl">
                <div className="flex flex-col lg:flex-row mx-auto items-center justify-around">

                    <div className="border-dashed px-3 border-2 my-2 border-orange-dark text-center">
                        <h1 className="text-xl sm:text-2xl lg:text-4xl font-luckiest tracking-wider font-light">Recibo de Cobro</h1>
                    </div>

                    <div className="mb-3 flex justify-center font-gloria font-semibold items-center flex-col text-center">
                        <h1>Cotillon San Martin</h1>
                        <p>Dirección: <span>Calle Sarmiento 160</span></p>
                        <p>Celular: <span>2634475135</span></p>
                    </div>
                </div>

                <div className="w-full overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th scope="col" className="py-2 px-0.5 text-left text-sm font-semibold text-gray-900">Cant.</th>
                                <th scope="col" className="py-2 px-0.5 text-left text-sm font-semibold text-gray-900">Descripción</th>
                                <th scope="col" className="py-2 px-2 text-left text-sm font-semibold text-gray-900">Precio</th>
                                <th scope="col" className="py-2 px-2 text-left text-sm font-semibold text-gray-900">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {data.order.map(item => (
                                <tr key={item.id}>
                                    <td className="whitespace-nowrap py-2 px-0.5 text-sm font-medium text-gray-900">{item.quantity}</td>
                                    <td className="whitespace-nowrap py-2 px-0.5 text-sm text-gray-900">{item.name}</td>
                                    <td className="whitespace-nowrap py-2 px-2 text-sm text-gray-900">{formatCurrency(item.price)}</td>
                                    <td className="whitespace-nowrap py-2 px-2 text-sm text-gray-900">{formatCurrency(item.subtotal)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="border-dotted border-t-2 border-orange-dark px-4 pt-4">
                    <div className="flex flex-col items-center">
                        <p className="text-sm sm:text-base font-luckiest tracking-wider font-light">
                            Medio de Pago:{" "}
                            <span className="font-chewy font-extralight">
                                {data.wayToPay.toUpperCase()}
                            </span>
                        </p>
                        {data.wayToPay === 'mercado pago' ? (
                            <>
                                <p className="text-sm sm:text-base font-luckiest tracking-wider font-light">
                                    Subtotal:{" "}
                                    <span className="font-chewy font-extralight">
                                        {formatCurrency(data.total)}
                                    </span>
                                </p>
                                <p className="text-sm sm:text-base font-luckiest tracking-wider font-light">
                                    Recargo MP:{" "}
                                    <span className="font-chewy font-extralight">
                                        {formatCurrency(data.total * 0.062)}
                                    </span>
                                </p>
                                <p className="text-base sm:text-xl font-luckiest tracking-wider font-light">
                                    Total:{" "}
                                    <span className="font-chewy font-extralight">
                                        {formatCurrency(data.total + data.total * 0.062)}
                                    </span>
                                </p>
                            </>
                        ) : (
                            <p className="text-base sm:text-xl font-luckiest tracking-wider font-light">
                                Total:{" "}
                                <span>{formatCurrency(data.total)}</span>
                            </p>
                        )}
                    </div>
                </div>

                <div className="border-dotted border-t-2 border-orange-dark px-4 pt-4">
                    <div className="flex flex-col items-center">
                        <p className="text-sm sm:text-base font-luckiest tracking-wider font-light">
                            Nombre:{" "}
                            <span className="font-gloria font-semibold">{data.name}</span>
                        </p>
                        <p className="text-sm sm:text-base font-luckiest tracking-wider font-light">
                            Celular:{" "}
                            <span className="font-gloria font-semibold">{data.cel}</span>
                        </p>
                    </div>
                </div>

                <div className="border-t-4 border-dashed border-orange-dark text-center mt-4">
                    <h1 className="uppercase text-lg sm:text-xl font-gloria font-bold">Gracias por su compra</h1>
                </div>
            </div>

        </>
    )
}
