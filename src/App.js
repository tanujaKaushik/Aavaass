// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import DashboardPage from './components/DashboardPage';
import ExplorePage from './components/ExplorePage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NotFound from './components/NotFound';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import CreatePost from './components/users/CreatePost';
import EditPost from './components/users/EditPost';
import ViewPost from './components/users/ViewPost';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
     <Routes>
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/dashboard" element={<DashboardPage />} />
          <Route exact path="/explore" element={<ExplorePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/users/create" element={<CreatePost />} />
          <Route exact path="/users/view/:id" element={<ViewPost />} />
          <Route exact path="/users/edit/:id" element={<EditPost />} />
          <Route exact path="/" element={<HomePage />} />
          <Route element={NotFound}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
