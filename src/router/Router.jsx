import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Item from "../pages/Item/Item"
import MainList from '../pages/MainList/MainList';
import Login from '../pages/Login/Login.jsx';
import './Router.css'

const Router = () => {
  return (
    <div className='router-block'>
      <BrowserRouter>
        <Routes>
          <Route path="/invoices/:id" element={<Item/>}/>
          <Route path="/invoices" element={<MainList />}/>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router