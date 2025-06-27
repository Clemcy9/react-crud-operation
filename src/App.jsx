import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Cardcontainer from "./components/Cardcontainer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddPostPage from "./pages/AddPostPage.jsx"
import AllPostPage from "./pages/AllPostPage.jsx"
import PostDetailPage from "./pages/PostDetailPage.jsx"



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AllPostPage/>}/>
          <Route path='/addpost' element={<AddPostPage/>}/>
          <Route path='/postdetails' element={<PostDetailPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
