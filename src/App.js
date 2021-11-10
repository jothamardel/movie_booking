import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Navigation from './Navigation';
import Admin from './Admin';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
