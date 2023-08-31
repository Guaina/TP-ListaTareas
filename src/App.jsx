import "./App.css";
import IniciarSesion from "./Login";
import Lista from "./TaskList";
import PaginaRegistro from "./Register";

function App() {
  return (
    <div>
      <IniciarSesion />
      <Lista />
      <PaginaRegistro />
    </div>
  );
}

export default App;
