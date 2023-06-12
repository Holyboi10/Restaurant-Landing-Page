import Navbar from './Navbar';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import Body from './Body';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Body/>
     
      
      {/*  */}


      

      <Router>
      <Navbar/>
      <Routes>
        <Route path='/About' element = {<About/>}/>
        <Route path='/Contact' element = {<Contact/>}/>
      </Routes>
      </Router>
      

    </div>
  );
}

export default App;
