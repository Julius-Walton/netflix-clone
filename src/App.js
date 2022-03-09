import './App.css';
import './normalize.css';
import Navigation from './components/Navigation';
import Billboard from './components/Billboard';
import Titles from './components/Titles';
import Footer from './components/Footer';
import requests from './api/requests';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Billboard />
      <Titles title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />

      <Titles title="Trending now" fetchUrl={requests.fetchTrending} />

      <Titles title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Titles title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Titles title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Titles title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Titles title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <Titles title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default App;
