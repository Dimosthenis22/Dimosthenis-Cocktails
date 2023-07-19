import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/home/homepage';
// import Recipes from './components/recipes/recipes';
import Favorites from './components/favorites/favorites';
import Login from './components/login-signup/loginSignup';
// import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Route path='/' exact component={Home} />
      {/* <Route path='/recipes' component={Recipes} /> */}
      <Route path='/favorites' component={Favorites} />
      <Route path='/login' component={Login} />
      {/* <Route path='/contact' component={Contact} /> */}
      <Footer />
    </Router>
  );
};

export default App;
