import './App.css';
import NavBar from './components/NavBar';

function App(props) {

  const mensaje = 'Bienvenido a la app';


  return (
<div className='container'>
  <NavBar/>
  <h3 className= 'text-3xl font-bold underline'>{mensaje}</h3>
</div>
  );
}

export default App;