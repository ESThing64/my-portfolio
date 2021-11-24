// import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import IntroDiv from "./components/IntroDiv"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/reset.css'
import './assets/style.css'
library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <IntroDiv />
      <Projects/>
      <Contact/>


      


        </div>
        );
}

        export default App;
