import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Form/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
