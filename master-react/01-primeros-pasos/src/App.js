import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {
  const ficha_medica = {
    altura: "170cm",
    grupo: "ARH+",
    estado: "Bueno",
    alergia: "Ninguna"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al Master en React!!!
        </p>
        {/* Este es mi componente */}
        <div className='componentes'>
          <hr />
            <EventosComponente/>
          <hr />
          <TercerComponente 
            nombre ="José Ruben"
            apellidos = "Lecona Cuevas" 
            ficha = {ficha_medica}
          />
          <hr />
          <SegundoComponente />
          <hr />
          <MiComponente />
          <hr />
        </div>

      </header>
    </div>
  );
}

export default App;
