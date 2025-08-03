import {BrowserRouter , Route , Routes } from 'react-router-dom' ;
function App() {
  return (
   <>
   <BrowserRouter>
   <Nabbar/>
   <Routes>
      <Route path = "/home" element={<Home/>}/>
      <Route path = "/about" element = {<About/>}/>
      

   </Routes>
   </BrowserRouter>
   <Home/>
   </>
  );
}

export default App;
