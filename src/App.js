import Landing from './pages/Landing';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Dashboard</Link>
        <Link to='/register'>Register</Link>
        <Link to='/landing'>Landing</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
