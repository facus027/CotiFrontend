import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayouts from './layouts/AppLayouts'
import HomeView from './views/HomeView'
import AdminLayouts from './layouts/AdminLayouts'
import DashboardView from './views/admin/DashboardView'
import CreateProducts from './views/admin/products/CreateProducts'
import EditProductsView from './views/admin/products/EditProductsView'
import ProductsView from './views/public/ProductsView'
import ProductsCategoryView from './views/public/ProductsCategoryView'
import OrderLayouts from './layouts/OrderLayouts'
import OrderView from './views/order/OrderView'
import CheckOutView from './views/order/CheckOutView'
import OrderViewAdmin from './views/admin/orderAdmin/OrderViewAdmin'
import PrivateRoute from './components/PrivateRoute'
import LoginView from './views/public/LoginView'
import RecipeView from './views/public/RecipeView'
import RecipeCreateView from './views/admin/recipeAdmin/RecipeCreateView'



export default function Router() {


    //Para cambiar promociones modificar store,orderView,OrderPopup

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayouts />}>
                    <Route element={<HomeView />} path='/' index />
                    <Route element={<RecipeView />} path='/recetas' />
                    <Route element={<OrderView />} path='/carrito' />
                    <Route element={<CheckOutView />} path='/checkout/:cel' />
                </Route>

                <Route element={<OrderLayouts />}>
                    <Route element={<ProductsView />} path='/products' />
                    <Route element={<ProductsCategoryView />} path={`/products/:category`} />
                </Route>

                <Route element={
                    <PrivateRoute>
                        <AdminLayouts />
                    </PrivateRoute>
                }>
                    <Route element={<DashboardView />} path='/admin' />
                    <Route element={<CreateProducts />} path='/admin/create' />
                    <Route element={<EditProductsView />} path='/admin/:productId/edit' />
                    <Route element={<OrderViewAdmin />} path='/admin/order/:status' />
                    <Route element={<RecipeCreateView />} path='/admin/recipe' />
                </Route>

                <Route element={<LoginView />} path="/login" />
            </Routes>
        </BrowserRouter>
    )
}