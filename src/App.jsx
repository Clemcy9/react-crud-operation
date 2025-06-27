import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Cardcontainer from "./components/Cardcontainer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Cardcontainer/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
