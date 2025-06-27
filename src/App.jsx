import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddPostPage from "./pages/AddPostPage.jsx"
import AddPostPage from "./pages/AllPostPage.jsx"
import AddPostPage from "./pages/PostDetailPage.jsx"



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AllPostPage/>}/>
          <Route path='/addpost' element={<AddPostPage/>}/>
          <Route path='/postdetail' element={<PostDetailPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
