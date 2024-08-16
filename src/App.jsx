import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Profile from './components/Profile';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <Header/>
      <Profile/>
      <About/>
      <Works/>
      <Contact/>
    </>
  )
}

export default App
