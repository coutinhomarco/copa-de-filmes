import {Routes, Route} from 'react-router-dom'
import Resultado from './pages/Resultado';
import './App.css';
import Inicio from './pages/Inicio';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/resultado" element={<Resultado />} />
    </Routes>
  );
}

export default App;
