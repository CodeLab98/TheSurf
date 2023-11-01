import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Newsletter from "./pages/Newsletter";
import Footer from "./pages/Footer";
import './App.css';

function App() {
  return (
    <>

      <Navbar />
      <Home />
      <About />
      <Destinations/>
      <Newsletter />
      <Footer />

    </> 
  );
}

export default App;
