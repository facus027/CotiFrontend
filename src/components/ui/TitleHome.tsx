import { useEffect, useRef, useState } from 'react';

export default function TitleHome({ title }: { title: string }) {

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
        <div
            ref={elementRef}
            className={`ml-4 rounded-lg bg-orange-600 md:w-1/3 py-3 h-16 w-2/3 bg-cover duration-300 transition-all my-4 bg-banner-position overflow-hidden element-to-animate  ${isInView && 'in-view'} `}
        >

            <h1 className={`font-chewy element-to-animate-text md:text-2xl text-sm  ${isInView && 'in-view'} `}>
                {title}
            </h1>

        </div>

    )
}
