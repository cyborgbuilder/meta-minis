import './App.css';
import ImgBox from './components/ImgBox';
import Team from './components/Team';
import RdMap from './components/RdMap'
import Rare from './components/Rare';
import Development from './components/Development';
import Faq from './components/Faq';
import Story from './components/Story';
import Home from './components/Home';
import Dev from './components/Dev';
import Discord from './components/Discord'
import Celebrate from './components/Celebrate';
import Game from './components/Game';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Home />
      <ImgBox />
      <Rare />
      <RdMap />
      <Celebrate />
      <Dev />
      <Team />
      <Story />
      {/* <Game /> */}
      <Faq />
      <Discord />
      <Footer />
      
    </div>
  );
}

export default App;
