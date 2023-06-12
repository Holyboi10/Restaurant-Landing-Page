import React from 'react'

const Body = () => {
  return (
    <div className='color-gray'>
      <div className='content'>
        <div className='content-flex'>
          <h3>Fresh Food</h3>
          <p>Fresh food is natural and healthy</p>
        </div>
        <div className='content-flex'>
        <h3>Unique Recipes</h3>
        <p>Creative and innovative culnary creation</p>
        </div>
        <div className='content-flex'>
        <h3>24/7 Home Delivery</h3>
        <p>Convinient food delivery anytime,anywhere.</p>
          
        </div>

      </div>
      <div className='About'>
        <div className='About-image'>

        </div>
        <div className='About-content'>
          <h2 style={{textAlign:"center"}}>About Us</h2>
          <ul><li><p>Indulge in our culinary delights</p></li></ul>
          <ul><li><p> Come taste our delicious cuisine</p></li></ul>
          <ul><li><p>Passionate chef creating unforgettable dishes</p></li></ul>
          <ul><li><p>Fresh ingredients, mouth watering flavours</p></li></ul>
          <ul><li><p>Authentic cuisine from around the world</p></li></ul>



        </div>

      </div> 
      <div className='Experience'>
        <div className='experience-cont'>
          <div className='exp-image'>

          </div>
          <div className='exp-button'>
            <button>12 years of experience</button>
            <button>200 Daily visitors</button>
            <button>30 Honours and Awards</button>
            <button> 2000 Client Reviews</button>

          </div>
          <div className='exp-imageB'>
            <div className='imageB-one'>

            </div>
            <div className='imageB-two'>
              
            </div>

          </div>

        </div>


      </div>
      <div className='chef'>
            <div className='chef-a'>
                <h1>Our chef's <br/> Signature recipe</h1>
                <p>An inspiring self-help book that offers practical <br/>advice
                for achieving personal growth and success</p>
            </div>
            <div className='chef-b'>
                <h3>View Menu</h3>
            </div>

        </div>
        {/* Recipes */}
        <div className='recipes'>
          <div className='recipe-a'></div>
          <div className='recipe-b'></div>
          <div className='recipe-c'></div>

        </div>
        {/* Footer */}
        <div className='footer'>
          <div className='footer-content'>
            <div>
              <h3>Woodlot Foods</h3>
              <p>  </p>

            </div>
            <div>
              <h3>COMPANY</h3>
              <p>Home</p>
              <p>Listing</p>
              <p>Foods</p>
              <p>Services</p>
              <p>Blog</p>
              
              </div>
              <div>
                <h3>HELP</h3>
                <p>Customer Support</p>
                <p>Terms & Condition</p>
                <p>Privacy Policy</p>
              </div>
              <div>
                <h3>CONTACT US</h3>
                <p>+234 - 81-095-444-88</p>
                <p>Ayobami2134@gmail.com</p>
                <p>Ibadan,Oyo State, Nigeria</p>
              </div>
              <div>
                <h3>NEWSLETTER</h3>
                <p>Subscribe to get updates now</p>
                <input placeholder='enter email'></input>
                <button>Subscribe</button>
              
              </div>

          </div>

        </div>
      </div>
  )
}

export default Body