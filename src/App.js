import Nav from './components/Nav.jsx';
import Home from './Screens/Home';
import Quotes from './Screens/Quotes';
import QuoteDetail from './Screens/QuoteDetail';
import QuoteCreate from './Screens/QuoteCreate';
import QuoteEdit from './Screens/QuoteEdit';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quotes/:id" element={<QuoteDetail />} />
        <Route path="/add-quote" element={<QuoteCreate />} />
        <Route path="/quotes/:id/edit" element={<QuoteEdit />} />
      </Routes>
    </div>
  );
}

export default App;

