import React from 'react';
import ReactDOM from 'react-dom/client';
import SmallTown from './images/city.jpg'
import './index.css'

//content in the app
const App = function(){
  // creating a JSX varible
  const anymsg = "I am text constant variable"
  return(
    <>
       <h1 style={{color:`magenta`, textAlign: `center`}}>Welcome to React JS</h1>
       <h2 style={{fontFamily: `algerian`}} className='subtitle'>Micheal Fernandez</h2>
       <figure style={{border: 'inset olive 5px'}}>
        <img src={SmallTown} style={{width:'100%', display:'block'}}/>
       </figure>
      <h2 style={{padding:'2em'}}>{anymsg}</h2>
    </>
  )
}

// rooting the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


