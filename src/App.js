import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import styled from 'styled-components'

function App() {
  return (
    <div className="App d-flex">
     <BrowserRouter>
      <Sidebar />
      <Routes>
      <Route path='/home' element={<Home /> } />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
