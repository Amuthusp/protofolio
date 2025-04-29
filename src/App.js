import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import About from './component/about';
import Projects from './component/project';
import Resume from './component/Resume';
import Contact from './component/contact';
import Footer from './component/footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
