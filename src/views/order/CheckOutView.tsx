import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOrderByCel } from "../../api/OrderApi";
import { Order } from "../../types";
import OrderDetailCheck from "../../components/order/OrderDetailCheck";
import { SiMercadopago } from "react-icons/si";
import IconWhatsApp from "../../components/ui/IconWhatsApp";
import { GrMapLocation } from "react-icons/gr";
import BannerAnimate from "../../components/ui/BannerAnimate";
import SpinnerLogo from "../../components/ui/SpinnerLogo";

export default function CheckOutView() {

  const param = useParams();
  const cel = param.cel

  const { data, isLoading } = useQuery<Order>({
    queryKey: ['orderCel', cel],
    queryFn: () => getOrderByCel(cel!),
    retry: false
  })

  if (isLoading) return <SpinnerLogo />

  if (data) return (
    <div className="lg:ml-20">
      <div className="mt-5">
        <BannerAnimate title={` ${data.name}, tu orden ha sido cargada.`} />

        <div className="flex flex-col lg:flex-row gap-5 mt-5">

          <div className="flex flex-col lg:w-1/3 mx-5 gap-2 mb-5">
            <OrderDetailCheck data={data} />
          </div>

          <aside className="lg:overflow-y-scroll w-full ml-4 lg:w-2/3 mt-10">
            {data.wayToPay === 'mercado pago' ? (
              <>
                <h2 className="font-luckiest tracking-wider font-light text-xl lg:text-2xl mb-5">
                  El método de pago elegido fue '{data.wayToPay.toUpperCase()}'
                </h2>
                <div className="flex flex-col lg:flex-row gap-5 lg:mt-5 font-chewy text-lg lg:text-xl">
                  <h2 className="">A continuación te dejamos el link de pago:</h2>
                  <p className="text-base font-extralight text-blue-800 flex gap-2">
                    <SiMercadopago size={30} />
                    <a
                      href="https://link.mercadopago.com.ar/facundodev"
                      target="_blank"
                      className="hover:underline hover:underline-offset-4 hover:decoration-wavy"
                    >
                      Mercado Pago
                    </a>
                  </p>
                </div>
                <div className="flex flex-col font-chewy text-lg lg:text-xl gap-5 lg:mt-5">

                  <p className="flex flex-col gap-5">
                    Si no tienes el contacto, aquí te lo acercamos:
                    <IconWhatsApp name={'Cotillon San Martin'} cel={'2634475135'} />
                    <span>No olvides agendarnos para ver nuestras novedades y promociones.</span>
                    <span>En brebe nos comunicaremos contigo para acordar la entrega.</span>
                  </p>
                </div>
              </>
            ) : (
              <>
                <h2 className="font-luckiest tracking-wider font-light text-xl lg:text-2xl mb-5">
                  El método de pago elegido fue '{data.wayToPay.toUpperCase()}'
                </h2>
                <div className="flex flex-col font-chewy text-lg lg:text-xl gap-5 mt-5">
                  <h2>Retira tu orden en el local, nos comunicaremos contigo para coordinar el horario.</h2>
                  <p className="flex flex-col gap-5">
                    Si tienes alguna consulta, aquí te dejamos el contacto:
                    <IconWhatsApp name={'Cotillon San Martin'} cel={'2634475135'} />
                    <span>No olvides agendar para ver nuestras novedades y promociones.</span>
                  </p>
                </div>
                <div className="flex flex-col gap-5 mt-5">
                  <h2 className="font-chewy text-lg lg:text-xl">Aquí te dejamos la ubicación del local:</h2>
                  <p className="font-chewy text-lg lg:text-xl text-gray-600 flex gap-2">
                    <GrMapLocation size={30} />
                    <a
                      href="https://link.mercadopago.com.ar/facundodev"
                      target="_blank"
                      className="hover:underline hover:underline-offset-4 hover:decoration-wavy"
                    >
                      Calle Sarmiento 160
                    </a>
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
