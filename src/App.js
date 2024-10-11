
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/JS/Utility/Header';
import HomePage from './Pages/JS/HomePage';
import Footer from './Components/JS/Utility/Footer';
import Contact from './Components/JS/Home/Contact';
import ProductListPage from './Pages/JS/ProductListPage';
import ProductDetailsPage from './Pages/JS/ProductDetailsPage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/products/category/:name" element={<ProductListPage />}/>
          <Route path="/products/:id" element={<ProductDetailsPage />}/>  
        </Routes>
        <Contact/>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
