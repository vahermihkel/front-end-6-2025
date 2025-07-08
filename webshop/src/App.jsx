import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/NavigationBar'
import HomePage from './pages/global/HomePage'
import ContactUs from './pages/global/ContactUs'
import Shops from './pages/global/Shops'
import Cart from './pages/global/Cart'
import SingleProduct from './pages/global/SingleProduct'
import AdminHome from './pages/admin/AdminHome'
import AddProduct from './pages/admin/AddProduct'
import EditProduct from './pages/admin/EditProduct'
import MaintainProducts from './pages/admin/MaintainProducts'
import MaintainCategories from './pages/admin/MaintainCategories'
import MaintainShops from './pages/admin/MaintainShops'
import NotFound from './pages/global/NotFound'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Map from './pages/global/Map'

function App() {
  return (
  
  <div className='App'>
      <NavigationBar />

      <Routes>
        <Route path='' element={ <HomePage />} />
        <Route path='contact' element={ <ContactUs />} />
        <Route path='shops' element={ <Shops />} />
        <Route path='cart' element={ <Cart />} />
        <Route path='product/:id' element={ <SingleProduct />} />
        <Route path='map' element={ <Map /> } />

        <Route path='admin' element={ <AdminHome />} />
        <Route path='admin/add-product' element={ <AddProduct />} />
        <Route path='admin/edit-product/:index' element={ <EditProduct/>} />
        <Route path='admin/maintain-products' element={ <MaintainProducts />} />
        <Route path='admin/maintain-categories' element={ <MaintainCategories />} />
        <Route path='admin/maintain-shops' element={ <MaintainShops />} />


        <Route path='login' element={ <Login />} />
        <Route path='signup' element={ <Signup />} />

        <Route path='*' element={ <NotFound />} />
      </Routes>
    </div>
    )
  }

export default App