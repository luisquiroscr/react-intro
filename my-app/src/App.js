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


const entrada = ['a', 'b', 'c'];
//  si esto es cierto && continua con lo de la derecha

const menuGithub = [

];

const opcionesMenu = [{

  id: 1, texto: 'Code', link: '/', isSelected: true
}, {
  id: 2, texto: 'Issues', link: '/issues', isSelected: false
}, {
  id:3, texto: 'Pull-requests', link: '/pulls', isSelected: false
}, {
  id: 4, texto: 'Contact', link: '/contact', isSelected: false
}  ]

function App() {
//Listas de cosas
const parrafos = entrada.map(elemento => {
    return ( 
    <div>
    <p>{elemento}</p>
    
    </div> ); 
  });

//mostrar todos los elementos del menu
//agregar id, poner al link como href
//si esta seleccionado, poner un *





  const menu = opcionesMenu.map(elemento => {
    return (
      <>
      {elemento.texto}
      </>
    );
  });

 
   const logotipo = logo;

   const mostrarImagen = false;

   const contador = 0;




  //Si el contador es menor a 5, imprimir un mensaje que diga
  //"El contador es menor a 5"
  //Si el contador es mayor a 5, imprimir un mensaje que diga
  //"El contador es mayor a 5"

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
      <div>
        {/*React*/}
        {/* {mostrarImagen && <img src={logotipo} className="App-logo" alt="logo" />} */}
      {mostrarImagen? <img src={logotipo} className="App-logo" alt="logo" /> : 'No hay Imagen que Mostrar'}
      {/*Vue*/}
      {/* <img v-if="mostrarImagen" src={logotipo} className="App-logo" alt="logo" />
      <span v-else>No hay Imagen</span> */}
      </div>
      
{/* {contador < 5 && <p>El contador es menor a 5</p>}
{contador > 5 && <p>El contador es mayor a 5</p>} */}

{contador < 5? <p>El contador es menor a 5</p> : 'El contador es mayor a 5'}
        
<h1>Estos son los elementos:</h1>
{parrafos}


<h1>Estos son los elementos del menu:</h1>
{menu}
          </div>



          
  );
}

export default App;
