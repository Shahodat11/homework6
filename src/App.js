import './App.css';
import HeaderTop from './components/headertop/HeaderTop';
import Navbar from './components/navbar/Navbar';
import MainBody from './components/mainBody/MainBody';
import Mainn from './components/mainn/Mainn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderTop/>
        <Navbar/>
        <MainBody/>
        <Mainn/>
      </header>
    </div>
  );
}

export default App;
