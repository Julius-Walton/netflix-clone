import './App.css';
import './normalize.css';
import Navigation from './components/Navigation';
import Billboard from './components/Billboard';
import Titles from './components/Titles';
import Footer from './components/Footer';
import { getAnalytics } from "firebase/analytics";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Billboard />
      <Titles />
      <Footer />
    </div>
  );
}

export default App;
