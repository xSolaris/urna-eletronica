import './App.css';
import ListarVotos from './components/ListarVotos';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cadastrar from './components/Cadastrar';
import Urna from './components/UrnaComponent/Urna';

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Urna/>}/>
        <Route path="/ListarVotos" element={<ListarVotos/>}/>
        <Route path="/CadastrarCandidato" element={<Cadastrar/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
