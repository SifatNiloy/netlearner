import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import ServiceCardGroup from './components/ServiceCardGroup/ServiceCardGroup';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<ServiceCardGroup></ServiceCardGroup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
