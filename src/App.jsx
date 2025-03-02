import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Qualification from './components/Qualification'
// import SocialLink from './components/SocialLink'
import Skills from './components/Work'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Qualification/>
      <Skills />
      {/* <SocialLink /> */}
      <Contact/>
    </div>
  );
}

export default App
