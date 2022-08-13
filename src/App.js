import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import ServiceCardGroup from './components/ServiceCardGroup/ServiceCardGroup';
import Description from './Description/Description';

import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Instructor from './components/Instructor/Instructor';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<ServiceCardGroup></ServiceCardGroup>}></Route>
        <Route path='/description' element={<Description></Description>}></Route>
        <Route path='/instructor' element={<Instructor></Instructor>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
