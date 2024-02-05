import React from "react";  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./screens/counter";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Counter />}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
