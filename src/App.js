import './App.css';
import Accesories from './components/Accesories/Accesories';
import Features from './components/Features/Features';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Features/>
      <Accesories/>
    </div>
  );
}

export default App;
