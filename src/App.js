import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      
    </Routes>
    </BrowserRouter> */}
    <Home/>
      </>
  );
}

export default App;
