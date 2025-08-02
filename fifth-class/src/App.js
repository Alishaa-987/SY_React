import './App.css';
import {BrowserRouter , Route , Routes } from 'react-router-dom' ;
import Register from './register';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Register />} />
  <Route path="/register" element={<Register />} />
</Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
