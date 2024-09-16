import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOrderByCel } from "../../api/OrderApi";
import { Order } from "../../types";
import OrderDetailCheck from "../../components/order/OrderDetailCheck";
import { SiMercadopago } from "react-icons/si";
import IconWhatsApp from "../../components/ui/IconWhatsApp";
import { GrMapLocation } from "react-icons/gr";
import BannerAnimate from "../../components/ui/BannerAnimate";

export default function CheckOutView() {

  const param = useParams();
  const cel = param.cel

  const { data, isLoading } = useQuery<Order>({
    queryKey: ['orderCel', cel],
    queryFn: () => getOrderByCel(cel!),
    retry: false
  })

  if (isLoading) return 'Cargando...'

  if (data) return (
    <div className="lg:ml-20">
      <div className="mt-5 ">

        <BannerAnimate title={` ${data.name}, tu orden ha sido cargada.`} />

        <div className="flex gap-5">
          <div className="flex flex-col w-1/3 mx-5 gap-2 mb-5">
            <OrderDetailCheck data={data} />
          </div>

          <aside className=" lg:overflow-y-scroll md:w-64 lg:w-2/3 mt-10">
            {data.wayToPay === 'mercado pago' ? (
              <>
                <h2 className="font-luckiest tracking-wider font-light text-2xl mb-5">El metodo de pago elegido fue '{data.wayToPay.toUpperCase()}'</h2>
                <div className="flex gap-5 mt-5 font-chewy text-xl">
                  <h2 className="">A continuacion te dejamos el Link de Pago:</h2>

                  <p className=" text-base font-extralight text-blue-800 flex gap-2"><SiMercadopago size={30} />
                    <a href="https://link.mercadopago.com.ar/facundodev" target="_blank"
                      className="hover:underline hover:underline-offset-4 hover:decoration-wavy"> Mercado Pago</a>
                  </p>
                </div>
                <div className="flex flex-col font-chewy text-xl gap-5 mt-5">
                  <h2>Por ultimo tienes que enviar via WhatsApp el comprobante con el total del recibo.</h2>
                  <p className="flex flex-col gap-5">Por si no lo tienes, te acercamos el contacto.{""}
                    <IconWhatsApp name={'Cotillon San Martin'} cel={'2634475135'} />
                    <span>No olvides agendarnos para ver nuestras novedades y promociones en las historias </span></p>

                </div>
              </>
            ) : (
              <>
                <h2 className="font-luckiest tracking-wider font-light text-2xl mb-5">El metodo de pago elegido fue: '{data.wayToPay.toUpperCase()}'</h2>
                <div className="flex flex-col font-chewy text-xl gap-5 mt-5">
                  <h2>El retiro de su orden se efectua en el local, pronto nos comunicaremos con vos para acordar el horario.</h2>
                  <p className="flex text-xl flex-col gap-5">Por tienes una consulta, te acercamos el contacto.{""}
                    <IconWhatsApp name={'Cotillon San Martin'} cel={'2634475135'} />
                    <span>No olvides agendarnos para ver nuestras novedades y promociones en las historias </span></p>
                </div>
                <div className="flex flex-col gap-5 mt-5">
                  <h2 className="font-chewy text-xl">A continuacion te dejamos la ubicacion del local:</h2>

                  <p className="font-chewy text-xl text-gray-600 flex gap-2"><GrMapLocation size={30} />
                    <a href="https://link.mercadopago.com.ar/facundodev" target="_blank"
                      className="hover:underline hover:underline-offset-4 hover:decoration-wavy">Calle Sarmiento 123</a>
                  </p>
                </div>
              </>

            )}

          </aside>
        </div>
      </div>

    </div>
  )
}
