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

  return (
<div className='container'>
<DaisyNavBar/>
  <h3 className={styles.title}>{mensaje}</h3>
  <Hero/>
  <Carrousel/>
  <Card/>
  <Card/>
  <Card/>
</div>
  );
}

export default App;