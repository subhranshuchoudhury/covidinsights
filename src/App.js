import Footer from './footer/Footer';
import Header from './header/Header';
import './App.css';
import Scraper from './grabber/Scrapper';

function App() {
  const d = new Date;
  return (
    <div style={d.getHours() > 17 ? { backgroundColor: "#0F3460" } : { backgroundColor: "white" }}>
      <Header />
      <Scraper />
      <Footer />
    </div>
  );
}

export default App;
