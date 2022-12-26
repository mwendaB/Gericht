import React from 'react';
import { Navbar } from './components';
import './App.css';

import { FindUs, AboutUs, Chef, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './containers';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
