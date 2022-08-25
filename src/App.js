// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import DashboardPage from './components/DashboardPage';
import ExplorePage from './components/ExplorePage';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
     <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
