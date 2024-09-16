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
            threshold: 0.9 // Se activa cuando el 100% del elemento es visible
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
            className={`ml-4 rounded-lg bg-banner-title  py-3 h-16 w-1/3 bg-cover duration-300 transition-all my-4 bg-banner-position overflow-hidden element-to-animate  ${isInView && 'in-view'} `}
        >

            <h1 className={`font-chewy element-to-animate-text  ${isInView && 'in-view'} `}>
                {title}
            </h1>

        </div>

    )
}
