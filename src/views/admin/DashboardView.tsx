import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "../../api/ProductApi";
import TableProducts from "../../components/admin/products/TableProducts";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import SpinnerLogo from "../../components/ui/SpinnerLogo";


export default function DashboardView() {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e: any) => {
        setSearchTerm(e.target.value);
    };

    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: getAllProduct
    })



    if (isLoading) return <SpinnerLogo />


    if (data) return (
        <>

            <div className=" max-w-7xl mx-auto my-auto flex flex-col lg:flex-row justify-between items-center">
                <div >
                    <h1 className="text-2xl font-black">Panel de Administracion</h1>
                    <p className="text-xl font-light text-gray-500 mt-5 mx-5">
                        Maneja y Administra tus Productos
                    </p>
                </div>
                <div className=" mx-auto w-1/2">
                    <div className="w-full bg-gray-100 flex items-center justify-center border border-gray-300 rounded-2xl p-3 gap-3 hover:border-black">
                        <div className=" justify-center">
                            <IoSearchSharp size={30} />
                        </div>
                        <div className="w-full mx-auto justify-center">
                            <input
                                type="text"
                                className="w-full p-2 rounded-2xl"
                                placeholder="Buscar Producto"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />

                        </div>
                    </div>
                </div>
            </div>


            {data.length ? (

                <div className="px-4 sm:px-6 lg:px-8 mt-10">
                    <div className="mt-8 flow-root ">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-white p-5 ">
                                <table className="min-w-full divide-y divide-gray-300 ">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                            >
                                                Producto
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                            >
                                                Descripcion
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Precio
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Disponibilidad
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Categoría
                                            </th>
                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                <span className="sr-only">Acciones</span>
                                            </th>
                                        </tr>
                                    </thead>

                                    {data.length ? (
                                        data.map(product => ((product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.category.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') && (
                                            <TableProducts key={product.id} product={product} />
                                        )))
                                    ) : (
                                        <p>No hay productos..</p>
                                    )}


                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            ) : (
                <p className=" text-center py-20">No Hay Productos aún</p>
            )}


        </>
    )




}



