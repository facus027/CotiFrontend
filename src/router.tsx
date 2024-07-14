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


export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayouts />}>
                    <Route element={<HomeView />} path='/' index />
                    <Route element={<OrderView />} path='/carrito' />
                </Route>
                <Route element={<OrderLayouts />}>
                    <Route element={<ProductsView />} path='/products' />
                    <Route element={<ProductsCategoryView />} path={`/products/:category`} />
                </Route>
                <Route element={<AdminLayouts />}>
                    <Route element={<DashboardView />} path='/admin' />
                    <Route element={<CreateProducts />} path='/admin/create' />
                    <Route element={<EditProductsView />} path='/admin/:productId/edit' />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}