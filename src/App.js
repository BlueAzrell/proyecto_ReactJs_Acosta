import {useEffect, useState} from 'react';
import './App.css';
import Card from './components/Card';
import Carrousel from './components/Carrousel';
import DaisyNavBar from './components/DaisyNavBar';
import Hero from './components/Hero';

function App(props) {

  const mensaje = 'Bienvenido a la app';
  const styles = {
    title: 'text-3xl font-bold underline bg-lime-300 my-5'
  }

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('Efecto al montaje');
  }, [])

  useEffect(() => {
    console.log('Efecto al montaje y cambio en Counter');
  }, [counter])

  useEffect(() => {
    console.log('Efecto en cada render');
  })

  const handleClick = () => {
    console.log('Hiciste click');
    setCounter(counter + 1)
  }

  const restaClick = () => {
    console.log('Hiciste un resta click');
    setCounter(counter - 1)
  }

  return (
<div className='container'>
<DaisyNavBar/>

 <div className='my-5'>
 <strong>Contador: {counter}</strong>
 </div>
 <button onClick={handleClick} className='btn'>Click acá</button>
 <button onClick={restaClick} className='btn'>Resta acá</button>

  <h3 className={styles.title}>{mensaje}</h3>
  <div className='my-5'><Hero/></div>
  <div className='my-5'><Carrousel/></div>
  <div className='my-5'><Card/></div>
  
  
  
</div>
  );
}

export default App;