import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ArtifactsList from "./components/list-books.component";
import CreateArtifact from "./components/create-book.component";
import EditBook from "./components/edit-book.component";
import SearchViaAuthor from "./components/search-via-author.component";
import BookCount from "./components/book-count.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Routes>
      <Route exact path="/" element={<ArtifactsList/>} />
      <Route path="/create" element={<CreateArtifact/>} />
      <Route path="/edit/:id" element={<EditBook/>} />
      <Route path="/search" element={<SearchViaAuthor/>} />
      <Route path="/bookCount" element={<BookCount/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
