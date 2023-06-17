import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home'

function App() {
  return (
    <div className="App">
      <div className="Add-header">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />    
         </Routes>
    </BrowserRouter>
    </div>
   
  </div>
   
   
  );
}

export default App;
