import BannerAnimate from "../components/ui/BannerAnimate";
import BannerService from "../components/ui/BannerService";
import CardCategory from "../components/ui/CardCategory";
import Carousel from "../components/ui/Carousel";
import TitleHome from "../components/ui/TitleHome";


export default function HomeView() {
    return (
        <div >

            <body className="mt-4">

                <BannerAnimate title={"Bienvenido, Cotillon San Martin está a su servicio"} />

                <div className="hidden md:block">
                    <Carousel />
                </div>
                <div className="hidden:lg my-32">
                    <h1 className="text-2xl">Hola Mundo!</h1>
                </div>

                <div className="w-11/12 mx-auto mb-5 -mt-16">
                    <BannerService />
                </div>

                <TitleHome title={"Categorias"} />

                <div className="w-10/12 mx-auto mb-5">
                    <CardCategory />
                </div>

                <TitleHome title={"Souvenirs"} />

            </body>
        </div>
    )
}
