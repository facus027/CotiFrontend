

export default function SpinnerLogo() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen">

                <div className="relative flex flex-col items-center">

                    <img
                        title="Logotipo CotillonSm"
                        alt="Logotipo CotillonSm"
                        src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1722520949/r24lgbeiyz1j3xs3mllv.png"
                        className="w-44 h-44 lg:w-52 lg:h-52 animate-spin"
                    />

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-orange-dark font-chewy tracking-wider mt-4">
                        Cargando...
                    </p>
                </div>
            </div>
        </>
    )
}
