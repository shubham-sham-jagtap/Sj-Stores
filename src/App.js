// import logo from './logo.svg'/;
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Products from './components/Products';
import Item from './components/Item';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<Products/>}/>
        {/* <Route path='/products/:id' component={(props)=>(<Item {...props}/>)}/> */}
        <Route path='/products/:id' element={(<Item/>)}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
