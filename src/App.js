import './App.css';
import Card from './components/Card';
import Carrousel from './components/Carrousel';
import Hero from './components/Hero';
import InputNoVowels from './components/InputNoVowels';
import { PartsContainer } from './components/PartsContainer';
import { CartProvider } from './context/CartContext';
import DarkmodeContext from './context/Darkmode';

function App(props) {

  const mensaje = 'Bienvenido a la app';
  const styles = {
    title: 'text-3xl font-bold underline bg-lime-300 my-5'
  }


  return (
<div className='container'>
 <DarkmodeContext.Provider value='true'>
  <InputNoVowels/>

<h3 className={styles.title}>{mensaje}</h3>



<CartProvider>
<PartsContainer/>
</CartProvider>


  <div className='my-5'><Hero/></div>
  <div className='my-5'><Carrousel/></div>
  <div className='my-5'><Card/></div>
  
  
  </DarkmodeContext.Provider>
</div>
  );
}

export default App;