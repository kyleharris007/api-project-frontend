import React from 'react';
import Nav from './components/Nav.jsx';
import Home from './screens/Home.jsx';
import Quotes from './screens/Quotes.jsx';
import QuoteDetail from './screens/QuoteDetail.jsx';
import QuoteCreate from './screens/QuoteCreate.jsx';
import QuoteEdit from './screens/QuoteEdit.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quotes/:quote" element={<QuoteDetail />} />
        <Route path="/add-quote" element={<QuoteCreate />} />
        <Route path="/quotes/:quote/edit" element={<QuoteEdit />} />
      </Routes>
    </div>
  );
}

export default App;

