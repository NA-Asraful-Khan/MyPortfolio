
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Componantes/Blog';
import Footer from './Componantes/Footer';
import Header from './Componantes/Header';
import Home from './Componantes/Home';
import Portfolio from './Componantes/Portfolio';
import Automotive_Parts_Manufacturing from './Componantes/Projects/Automotive_Parts_Manufacturing';

function App() {
  return (
    <div data-theme="mytheme">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/Portfolio/Automotive-Parts-Manufacturing' element={<Automotive_Parts_Manufacturing></Automotive_Parts_Manufacturing>}></Route>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
