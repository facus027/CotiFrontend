import { GrMapLocation } from "react-icons/gr";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbBrandCashapp } from "react-icons/tb";

export default function BannerService() {
    return (
        <div className=" flex flex-col lg:flex-row justify-between items-center shadow-lg border-t-4 gap-7 border-amber-400 bg-gray-200 mx-auto max-w-screen-2xl p-5">

            <div className="flex flex-col items-center gap-1">
                <GrMapLocation size={50} className=" items-center mb-4" />
                <h1 className=" font-gloria text-lg">Ciudad de San Martin {" , "} <span className=" font-black">Provincia de Mendoza</span></h1>
                <p className="text-orange-dark font-baloo font-bold">Calle Sarmiento al 123</p>
            </div>
            <div className="flex flex-col items-center">
                < BsGraphUpArrow size={50} className=" items-center mb-4" />
                <h1 className=" font-gloria text-lg">Somos Mayorista {","}
                    <span className=" font-black">Incrementa tus Ganancias</span></h1>
                <p className="text-orange-dark font-baloo font-bold">Aumenta el catalogo de tu comercio</p>
            </div>
            <div className="flex flex-col items-center">
                < TbBrandCashapp size={50} className=" items-center mb-4" />
                <h1 className=" font-gloria text-lg">Medios de pago {" , "}
                    <span className=" font-black">Todas las tarjetas</span></h1>
                <p className="text-orange-dark font-baloo font-bold">Tranferencias billetera virtual</p>
            </div>

        </div>
    )
}
