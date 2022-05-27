import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Home from './features/Home/Home';
import Login from './features/Login/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
