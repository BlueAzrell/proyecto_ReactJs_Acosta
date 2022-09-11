import './App.css';
import Card from './components/Card';
import Carrousel from './components/Carrousel';
import Hero from './components/Hero';
import { PartsContainer } from './components/PartsContainer';

function App(props) {

  const mensaje = 'Bienvenido a la app';
  const styles = {
    title: 'text-3xl font-bold underline bg-lime-300 my-5'
  }


  return (
<div className='container'>

<h3 className={styles.title}>{mensaje}</h3>

<PartsContainer/>

  <div className='my-5'><Hero/></div>
  <div className='my-5'><Carrousel/></div>
  <div className='my-5'><Card/></div>
  
  
  
</div>
  );
}

export default App;