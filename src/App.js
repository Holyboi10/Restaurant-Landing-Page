import Navbar from './Navbar';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
// import Hero from './Hero';


function App() {
  return (
    <div className="App" >
      <div className='hero'>
      <div className='hero-content'> 
            <h2>Authentic Cuisine <br/> from around the world</h2>
            <button>About Us</button>
        </div>

      </div>
      {/*  */}
      <div className='color-gray'>
      <div className='content'>
        <div className='content-flex'>
          <ul><li><h3>Fresh Food</h3></li></ul>
          <p>Fresh food is natural and healthy</p>
        </div>
        <div>
        <ul><li><h3>Unique Recipes</h3></li></ul>
        <p>Creative and innovative culnary creation</p>
        </div>
        <div>
        <ul><li><h3>24/7 Home Delivery</h3></li></ul>
        <p>Convinient food delivery anytime,anywhere.</p>
          
        </div>

      </div>
      </div>

      {/*  */}
      <div className='About'>
        <div className='About-image'>

        </div>
        <div className='About-content'>
          <h2>About Us</h2>
          <ul><li><p>Indulge in our culinary delights</p></li></ul>
          <ul><li><p> Come taste our delicious cuisine</p></li></ul>
          <ul><li><p>Passionate chef creating unforgettable dishes</p></li></ul>
          <ul><li><p>Fresh ingredients, mouth watering flavours</p></li></ul>
          <ul><li><p>Authentic cuisine from around the world</p></li></ul>



        </div>

      </div>
      

      

      <Router>
      <Navbar/>
      <Routes>
        <Route path='/About' element = {<About/>}/>
        <Route path='/Contact' element = {<Contact/>}/>
      </Routes>
      </Router>
      {/* <Hero/> */}

    </div>
  );
}

export default App;
