import React from 'react';
import "./styles/style.scss";
import Header from "./components/Header";
import Visual from "./components/Visual";
import About from "./components/About";
import Work from "./components/Work";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Stack from "./components/Stack";
import Footer from "./components/Footer";
import FloatingButton from './components/FloatingButton';

function App() {
  return (
      <>
        <Header/>
        <Navigation/>
          <main className="main">
              <Visual/>
              <About/>
              <Stack/>
              <Work/>
              <Contact/>
          </main>
        <Footer/>
        <FloatingButton />
      </>
  );
}

export default App;
