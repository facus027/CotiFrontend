import { Order } from "../../types";
import { formatCurrency } from "../../util";

export default function OrderDetailCheck({ data }: { data: Order }) {

    console.log(data);

    return (
        <>
            <div className="flex  flex-col justify-start items-center mt-2 border-double border-4 border-black p-1 shadow-2xl">
                <div className="border-dashed px-3 border-2 my-2 border-orange-dark">
                    <h1 className="text-2xl font-luckiest tracking-wider font-light ">Recibo de Cobro</h1>
                </div>
                <div className="mb-3 flex justify-center font-gloria font-semibold items-center flex-col">
                    <h1>Cotillon San Martin</h1>
                    <p>Direccion: <span>Calle Sarmiento 123</span></p>
                    <p>Celular: <span>2634475135</span></p>
                </div>
                <div className="border-t-2 border-dashed w-full mr-4 lg:mr-0 border-orange-dark">
                    <table className=" divide-y divide-gray-300">
                        <thead className="">
                            <tr className="">
                                <th
                                    scope="col"
                                    className="py-3.5 pl-1 pr-1 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                >Cant.
                                </th>
                                <th
                                    scope="col"
                                    className="py-3.5 pl-1 pr-1 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                >Descripcion
                                </th>
                                <th
                                    scope="col"
                                    className="py-3.5 pl-1 pr-1 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                >Precio
                                </th>
                                <th
                                    scope="col"
                                    className="py-3.5 pl-1 pr-1 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                >SubTotal
                                </th>
                            </tr>

                        </thead>
                        <tbody className="divide-y divide-gray-200">

                            {data.order.map(item => (
                                <tr key={item.id} >
                                    <td className="whitespace-nowrap font-chewy mx-auto py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                        {item.quantity}
                                    </td>
                                    <td className="whitespace-nowrap font-baloo font-semibold py-2 pl-4 pr-3 text-sm text-gray-900 sm:pl-0">
                                        {item.name}
                                    </td>
                                    <td className="whitespace-nowrap py-2 font-chewy tracking-wider pl-4 pr-3 text-sm font-extralight text-gray-900 sm:pl-0">
                                        {formatCurrency(item.price)}
                                    </td>
                                    <td className="whitespace-nowrap py-2 font-chewy tracking-wider pl-4 pr-3 text-sm font-extralight text-gray-900 sm:pl-0">
                                        {formatCurrency(item.subtotal)}
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
                <div className="border-dotted border-t-2 border-orange-dark px-10 pt-2">
                    <div className="mb-3 flex justify-center items-center flex-col">
                        <p className="font-luckiest tracking-wider font-light">Medio de Pago:{" "}
                            <span className="font-chewy font-extralight">'{data.wayToPay.toUpperCase()}'</span></p>
                        {data.wayToPay == 'mercado pago' ? (
                            <>
                                <p className="text-base font-luckiest tracking-wider font-light">Recargo MP:{"  "}
                                    <span className="font-chewy font-extralight">{formatCurrency(data.total * 0.062)}</span></p>
                                <p className="text-xl font-luckiest tracking-wider font-light">Total:{"  "}
                                    <span className="font-chewy font-extralight">{formatCurrency(data.total + (data.total * 0.062))}</span></p>
                            </>
                        ) : (

                            <p className="text-xl">Total: <span>{formatCurrency(data.total)}</span></p>
                        )}
                    </div>
                </div>
                <div className="border-dotted border-t-2 border-orange-dark px-10 pt-2">
                    <div className="mb-1 flex justify-center items-center flex-col">
                        <p className=" font-luckiest tracking-wider font-light">Nombre: {"  "}
                            <span className="font-gloria font-semibold">{data.name}</span></p>
                        <p className=" font-luckiest tracking-wider font-light">Celular: {"  "}
                            <span className="font-gloria font-semibold">{data.cel}</span></p>
                    </div>
                </div>
                <div className="border-t-4 border-dashed border-orange-dark">
                    <h1 className="uppercase font-gloria text-xl font-bold my-2">gracias por su compra</h1>
                </div>

            </div>
        </>
    )
}
