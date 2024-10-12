import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
    {
        id: 1,
        content: "Slide 1",
        backgroundColor: "bg-banner-slider1"
    },
    {
        id: 2,
        content: "Slide 2",
        backgroundColor: "bg-banner-slider2"
    },
    {
        id: 3,
        content: "Slide 3",
        backgroundColor: "bg-banner-slider3"
    },
];


export default function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambia de slide automáticamente cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 7000); // Cambia el slide cada 6 segundos

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative max-w-7xl mx-auto">
            <div className="relative w-full h-screen">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`carousel-item overflow-hidden absolute bg-contain bg-no-repeat inset-0 flex justify-center items-center duration-150 transition-all ${slide.backgroundColor} ${index === currentIndex ? 'z-10' : 'opacity-0 z-0'}`}
                    >
                        {slide.id == 1 && (
                            <div className="flex flex-col lg:flex-row justify-around items-center gap-10 mx-auto">
                                <div className="flex flex-col gap-10 lg:gap-40 items-center">
                                    <Link to={'products/souvenirs'} className="animate-slider-button p-0.5 px-6 lg:px-10 text-xl lg:text-2xl tracking-wider font-luckiest rounded-lg border-2 border-yellow-light hover:text-black text-white bg-orange-light mt-8 lg:mt-0">
                                        Ir a Souvenirs
                                    </Link>
                                    <p className="animate-slider-title text-black font-extrabold tracking-wide font-chewy text-xl lg:text-3xl text-center w-40 lg:w-52">Únicos a pedido del cliente</p>
                                </div>
                                <div className="flex flex-col gap-10 lg:gap-40 items-center">
                                    <Link to={'products/decoracion'} className="animate-slider-button p-0.5 px-6 lg:px-10 text-xl lg:text-2xl tracking-wider font-luckiest rounded-lg border-2 border-yellow-light hover:text-black text-white bg-orange-light">
                                        Ir a Decoración
                                    </Link>
                                    <p className="animate-slider-description text-black font-extrabold tracking-wide font-chewy text-xl lg:text-3xl text-center w-48 lg:w-60">Tendencia para cualquier celebración</p>
                                </div>
                                <div className="flex flex-col gap-10 lg:gap-40 items-center">
                                    <Link to={'https://wa.me/5492634475135'} className="animate-slider-button p-0.5 px-6 lg:px-10 text-xl lg:text-2xl tracking-wider font-luckiest rounded-lg border-2 border-yellow-light hover:text-black text-white bg-orange-light">
                                        Asesoría Experimentada
                                    </Link>
                                    <p className="animate-slider-title text-black font-extrabold tracking-wide font-chewy text-xl lg:text-3xl text-center w-40 lg:w-52">Más de 15 años en el rubro</p>
                                </div>
                            </div>
                        )}

                        {slide.id == 2 && (
                            <>
                                <h1 className="animate-slider-title text-5xl lg:text-8xl font-luckiest text-orange-light tracking-wider font-bold absolute top-8 lg:top-10">
                                    REPOSTERÍA
                                </h1>
                                <p className="animate-slider-description text-2xl lg:text-5xl font-chewy relative bottom-8 lg:bottom-12 left-16 lg:left-36 w-72 lg:w-96 tracking-wider text-center text-orange-light font-semibold uppercase">
                                    Productos de alta calidad al menor precio
                                </p>
                                <Link to={'products/reposteria'} className="animate-slider-button relative top-24 lg:top-32 right-16 lg:right-48 p-0.5 px-6 lg:px-10 text-2xl lg:text-3xl font-chewy rounded-lg border-2 border-yellow-light hover:text-black text-white bg-orange-light">
                                    Ir a Repostería
                                </Link>
                            </>
                        )}

                        {slide.id == 3 && (
                            <>
                                <h1 className="animate-slider-title text-5xl lg:text-8xl font-chewy tracking-wider text-white font-bold absolute top-8 lg:top-10 right-8 lg:right-14">
                                    Carnaval
                                </h1>
                                <p className="animate-slider-description text-2xl lg:text-5xl font-luckiest absolute right-10 lg:right-20 w-60 lg:w-72 tracking-wider text-center text-white font-light">
                                    Los más originales y divertidos artículos de cotillón
                                </p>
                                <Link to={'products/carnaval'} className="animate-slider-button relative top-24 lg:top-32 left-10 lg:left-20 p-1 px-8 lg:px-10 text-3xl lg:text-5xl font-baloo uppercase rounded-lg border-2 border-yellow-light hover:text-black text-white bg-orange-light">
                                    Ir a Carioca
                                </Link>
                            </>
                        )}
                    </div>
                ))}
            </div>

            <button onClick={prevSlide} className="hidden lg:block absolute z-30 -left-5 cursor-pointer top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                &#9651;
            </button>
            <button onClick={nextSlide} className="hidden lg:block absolute z-30 -right-5 cursor-pointer top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                &#9661;
            </button>
        </div>

    );
};

