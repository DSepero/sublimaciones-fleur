import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Nosotras from './pages/Nosotras';

import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Inicio />}/>
      <Route path="/productos" element={<Productos />}/>
      <Route path="/nosotras" element={<Nosotras />} />
    </Routes>
    
  
    </BrowserRouter>
      
    </>
  );
}

export default App;
