import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Planet from "./Planet/Planet";


function App() {
  return (
    <div className="App">
     <Header/>
            <Planet/>
        <Footer/>
    </div>
  );
}

export default App;
