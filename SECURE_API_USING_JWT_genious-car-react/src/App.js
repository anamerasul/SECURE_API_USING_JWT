import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import AddService from './Pages/AddService/AddService'

import ManageServices from './Pages/ManageServices/ManageServices'
import RouteWithTitle from './Pages/Shared/RouteWithTitle/RouteWithTitle';
import Order from './Pages/Order/Order';

function App() {

  const port = 4005
  return (
    <div>
      <Header></Header>
      <Routes>

        {/* <RouteWithTitle title="my"></RouteWithTitle> */}
        <Route path="/" element={


          <Home port={port}></Home>

        }></Route>
        <Route path="/home" element={

          <Home></Home>

        }></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail port={port}></ServiceDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout/:serviceId" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>

        <Route path="/addservice" element={
          <RequireAuth>
            <AddService port={port}></AddService>
          </RequireAuth>
        }></Route>
        <Route path="/manage" element={
          <RequireAuth>
            <ManageServices port={port}></ManageServices>
          </RequireAuth>
        }></Route>
        <Route path="/orders" element={
          <RequireAuth>
            <Order port={port}></Order>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
