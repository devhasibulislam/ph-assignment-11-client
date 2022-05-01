import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Register from './Pages/Register/Register';
import Reset from './Pages/Reset/Reset';
import Home from './Routes/Home/Home';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import MyItems from './Routes/MyItems/MyItems';
import ManageItems from './Routes/ManageItems/ManageItems';
import AddItems from './Routes/AddItems/AddItems';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/addItems' element={<AddItems></AddItems>}></Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/reset' element={<Reset></Reset>}></Route>
      </Routes>

      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
