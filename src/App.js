import './App.css';
import Accesories from './components/Accesories/Accesories';
import Arrivals from './components/Arrivals/Arrivals';
import Benefits from './components/Benefits/Benefits';
import Brands from './components/Brands/Brands';
import Categories from './components/Categories/Categories';
import Features from './components/Features/Features';
import Header from './components/Header/Header';
import Seller from './components/Seller/Seller';
import Subscribe from './components/Subscribe/Subscribe';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Features/>
      <Accesories/>
      <Seller/>
      <Arrivals/>
      <Benefits/>
      <Categories/>
      <Brands/>
      <Subscribe/>
    </div>
  );
}

export default App;
