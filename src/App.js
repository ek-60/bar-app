import './App.css';
import Beer from './components/Beer';
import BasicButtonGroup from './components/ButtonGroup';
import Cider from './components/Cider';
import Footer from './components/Footer';
import Header from './components/Header.js';
import LongDrink from './components/LongDrink';



function App() {
  return (
    <div className="App">
      <Header />
      <BasicButtonGroup />
      <Beer />
      <Cider />
      <LongDrink />
      <Footer />
    </div>
  );
}

export default App;
