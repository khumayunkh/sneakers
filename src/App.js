import './App.css';
import Accesories from './components/Accesories/Accesories';
import Arrivals from './components/Arrivals/Arrivals';
import Features from './components/Features/Features';
import Header from './components/Header/Header';
import Seller from './components/Seller/Seller';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Features/>
      <Accesories/>
      <Seller/>
      <Arrivals/>
    </div>
  );
}

export default App;
