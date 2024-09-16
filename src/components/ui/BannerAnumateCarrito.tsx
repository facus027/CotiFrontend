

export default function BannerAnumateCarrito() {
    return (
        <div id='banner'
            className="w-2/3 h-24 ml-10 border-2 animate-bg-banner-carrito bg-cover bg-banner-position-carrito border-yellow-pastel overflow-hidden shadow bg-banner-carrito rounded-md"
        >
            <h1 className="text-orange-dark shadow-title banner-shadow animate-text-baner transition-all uppercase block font-semibold tracking-wider font-luckiest mx-auto mt-5 m-7 text-2xl md:text-4xl text-center"
            >Bienvenido a tu Carrito de compras. <img className="h-16 -mt-10" src={`/public/icons-carrito.png`} alt="icn" />
            </h1>
        </div>
    )
}
