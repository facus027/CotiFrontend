

export default function BannerAnimate({ title }: { title: string }) {

    return (
        <div id='banner'
            className="w-2/3 h-24 mx-auto border-8 animate-bg-banner bg-cover banner-position-inicio border-white overflow-hidden m-5 shadow bg-banner-inicio"
        >
            <h1 className="text-white shadow-title font-luckiest banner-shadow animate-text-baner transition-all uppercase block tracking-wider mx-auto mt-5 m-7 text-2xl md:text-3xl text-center"
            >{title}
            </h1>
        </div>
    )
}
