import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';



function App() {
  




  return (
    <div className="App">
    <Header/>
    <Home/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    {/* <Main/> */}
    </div>
  );
}

export default App;
