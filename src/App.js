import { Route, BrowserRouter as Router, Routes }
  from 'react-router-dom';
import './App.css';
import { Home } from './component/Home';
import { Dashboard } from './component/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
