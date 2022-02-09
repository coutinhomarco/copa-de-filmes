import {Routes, Route} from 'react-router-dom'
import './App.css';
import Inicio from './pages/Inicio';
import Placar from './pages/Placar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/placar" element={<Placar />} />
    </Routes>
  );
}

export default App;
