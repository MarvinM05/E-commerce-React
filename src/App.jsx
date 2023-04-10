
import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Purchases from './pages/Purchases';
import Login from './pages/Login';
import Loader from './components/Loader';
import { useSelector } from 'react-redux';

function App() {

  /*configuraciones

  -Redux
  -Router dom
  -Bootstrap

  */
  
  const isLoading = useSelector( state => state.isLoading)
  
  return (
    <HashRouter>
      <div className="App">
        {isLoading && <Loader/>}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/product/:id' element={<ProductDetail/>}/>
          
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App