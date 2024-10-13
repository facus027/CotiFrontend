import ProductsHomeByCategory from "../components/products/ProductsHomeByCategory";
import BannerAnimate from "../components/ui/BannerAnimate";
import BannerService from "../components/ui/BannerService";
import CardCategory from "../components/ui/CardCategory";
import Carousel from "../components/ui/Carousel";
import Contact from "../components/ui/Contact";
import TitleHome from "../components/ui/TitleHome";


export default function HomeView() {
    return (
        <div >

            <body className="mt-4">

                <BannerAnimate title={"Bienvenido, Cotillon San Martin está a su servicio"} />

                <div className="">
                    <Carousel />
                </div>


                <div className="w-11/12 mx-auto mb-5 mt-3 lg:mt-4">
                    <BannerService />
                </div>

                <TitleHome title={"disfrases"} />
                <ProductsHomeByCategory cols={2} category={"disfrases"} />

                <TitleHome title={"Categorias"} />

                <div className="w-10/12 mx-auto mb-5">
                    <CardCategory />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div>
                        <TitleHome title={"Combos"} />
                        <ProductsHomeByCategory cols={1} category={"combos"} />
                    </div>
                    <div>
                        <TitleHome title={"souvenirs"} />
                        <ProductsHomeByCategory cols={1} category={"souvenirs"} />
                    </div>

                </div>
                <div className="flex justify-center items-center">
                    <Contact />
                </div>

                <TitleHome title={"Recetas"} />

            </body>
        </div>
    )
}
