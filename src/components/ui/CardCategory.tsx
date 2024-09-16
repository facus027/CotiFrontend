import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CardCategory() {

    const elementRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target); // Deja de observar después de la animación
                }
            });
        }, {
            threshold: 0.1 // Se activa cuando el 10% del elemento es visible
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <div ref={elementRef} className={`element-to-animate  ${isInView && 'in-view'} `}>
            <div className="grid gap-7 grid-cols-2 mb-6" >

                <Link className='focus:shadow-2xl shadow-orange-light' to={'/products/globos'} >
                    <div
                        className={`bg-cover bg-banner-globos h-80 w-full border-2 items-center justify-center border-gray-400 first-line:grid-cols-1
                     group overflow-hidden`}>
                        <h1 className="justify-center text-center mt-32 font-bold text-black text-6xl font-luckiest uppercase tracking-wider
                    group-hover:animate-show-card-title group-hover:scale-150 ">
                            globos
                        </h1>
                    </div>
                </Link>
                <Link to={'/products/reposteria'} >
                    <div
                        className={`bg-cover bg-banner-reposteria h-80 w-full border-2 items-center justify-center border-gray-400 first-line:grid-cols-1
                    animate-bg-banner-cate group overflow-hidden`}>
                        <h1 className="justify-center text-center mt-32 font-bold text-black text-6xl font-luckiest uppercase tracking-wider
                    group-hover:animate-show-card-title group-hover:scale-150 group-hover:text-black">
                            reposteria
                        </h1>
                    </div>
                </Link>
                <Link to={'/products/decoracion'} >
                    <div
                        className={`bg-cover group overflow-hidden bg-banner-decoracion h-80 w-full border-2 items-center justify-center border-gray-400 first-line:grid-cols-1
                        animate-bg-banner-cate`}>
                        <h1 className="justify-center text-center mt-32 font-bold text-black text-6xl font-luckiest uppercase tracking-wider
                       group-hover:animate-show-card-title group-hover:scale-150 group-hover:text-black">
                            decoracion
                        </h1>
                    </div>
                </Link>
                <Link to={'/products/carnaval'} >
                    <div
                        className={`bg-cover bg-banner-carnaval h-80 w-full border-2 items-center justify-center border-gray-400 first-line:grid-cols-1
                     group overflow-hidden`}>
                        <h1 className="justify-center text-center mt-32 font-bold text-black text-6xl font-luckiest uppercase tracking-wider
                    group-hover:animate-show-card-title group-hover:scale-150 group-hover:text-black">
                            carnaval
                        </h1>
                    </div>
                </Link>
            </div>
            <Link to={'/products/golosinas'} >
                <div className='grid grid-cols-1'>
                    <div
                        className={`bg-cover bg-banner-golosinas h-80 w-full border-2 items-center justify-center border-gray-400 first-line:grid-cols-1
                    animate-bg-banner-cateX group overflow-hidden`}>
                        <h1 className="justify-center text-center mt-32 font-bold text-black text-6xl font-luckiest uppercase tracking-wider
                    group-hover:animate-show-card-title group-hover:scale-150">
                            golosinas
                        </h1>
                    </div>
                </div>
            </Link>
        </div>
    )
}
