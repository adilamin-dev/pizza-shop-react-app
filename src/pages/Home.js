// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from "../components/Navigation";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="hoeroSection">
        <div className="container">
          <div className="heroWraper">
            <div className="hero-b1">
              <p>Are you hungry?</p>
              <h1>Don't Wait!</h1>
              <button className="order-btn">ORDER NOW</button>
            </div>
            <div className="hero-b2">
              <div className="heroImage-wraper">
                <img src="./img/milana-jovanov.jpg" alt="heroimage"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-product-section">
        <Products />
      </div>
    </>
  )
}

export default Home;