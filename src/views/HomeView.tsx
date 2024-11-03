import ProductsHomeByCategory from "../components/products/ProductsHomeByCategory";
import RecipeViewHome from "../components/recipes/RecipeViewHome";
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

                <TitleHome title={"disfraces"} />
                <ProductsHomeByCategory cols={2} category={"disfraces"} />

                <TitleHome title={"Categorias"} />

                <div className="w-10/12 mx-auto mb-5">
                    <CardCategory />
                </div>


                <div>
                    <TitleHome title={"Combos"} />
                    <ProductsHomeByCategory cols={2} category={"combos"} />
                </div>
                <div>
                    <TitleHome title={"souvenirs"} />
                    <ProductsHomeByCategory cols={2} category={"souvenirs"} />
                </div>


                <div className="flex justify-center items-center">
                    <Contact />
                </div>

                <TitleHome title={"Recetas"} />
                <RecipeViewHome />

            </body>
        </div>
    )
}
