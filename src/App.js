import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componets/Home/Home';
import { NetflixRegistation } from './Componets/SignIn/SineIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signIn/" element={<NetflixRegistation/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
