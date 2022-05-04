import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './Pages/Login/Login';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Register from './Pages/Register/Register';
import Reset from './Pages/Reset/Reset';
import Home from './Routes/Home/Home';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import MyItems from './Routes/MyItems/MyItems';
import ManageItems from './Routes/ManageItems/ManageItems';
import AddItems from './Routes/AddItems/AddItems';
import NotFound from './Routes/NotFound/NotFound';
import Blog from './Routes/Blog/Blog';
import Inventory from './Routes/Inventory/Inventory';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>

        {/* <Route path='/order' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route> */}

        <Route path='/addItems' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>

        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>

        <Route path='/blog' element={<Blog></Blog>}></Route>

        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/reset' element={<Reset></Reset>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
