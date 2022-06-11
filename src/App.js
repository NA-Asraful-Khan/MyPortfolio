
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Componantes/Blog';
import Footer from './Componantes/Footer';
import Header from './Componantes/Header';
import Home from './Componantes/Home';
import Portfolio from './Componantes/Portfolio';
import Angels_Meakup from './Componantes/Projects/Angels_Meakup';
import AutoMobile_Inventories from './Componantes/Projects/AutoMobile_Inventories';
import Automotive_Parts_Manufacturing from './Componantes/Projects/Automotive_Parts_Manufacturing';
import My_Photograpy from './Componantes/Projects/My_Photograpy';

function App() {
  return (
    <div data-theme="mytheme">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/Portfolio/Automotive-Parts-Manufacturing' element={<Automotive_Parts_Manufacturing></Automotive_Parts_Manufacturing>}></Route>
        <Route path='/Portfolio/AutoMobile-Inventories' element={<AutoMobile_Inventories></AutoMobile_Inventories>}></Route>
        <Route path='/Portfolio/ANGELS-MAKEUP' element={<Angels_Meakup></Angels_Meakup>}></Route>
        <Route path='/Portfolio/My-Photograpy' element={<My_Photograpy></My_Photograpy>}></Route>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
