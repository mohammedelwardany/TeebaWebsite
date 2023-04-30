import logo from './logo.svg';
import './App.css';
import { Home } from './src/screens';
import CircleDemo, {test} from './src/components/index'
import { CustomNavbar, Navbar, NavbarCustome } from './src/components/NavBar/navBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
       {/* <Home/> */}
       <CustomNavbar/>
      </header>
    </div>
  );
}

export default App;
