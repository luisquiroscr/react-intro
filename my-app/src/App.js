import logo from './logo.svg';
import './App.css';
//1. Los Componentes son Funciones que retornan HTML
//2. Recrdar los parentesis
//3. Clases con CSS van cn className
//4. Referencias de JS van dentro de llaves {}
//5. Parentesis HTML y Llaves Variables de Js
//6. Llaves sustituyen v-bind o {{}} de vue

function HelloWorld() {
  const nombre = 'Luis Fernando';
  return (
    <div> 
      <h1>Hello {nombre}</h1>
    </div>
  );
}


function App() {

   const logotipo = logo;
   const nombre = "Hello World";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logotipo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HelloWorld />
          </div>
  );
}

export default App;
