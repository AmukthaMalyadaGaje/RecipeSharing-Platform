import './App.css';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import SignUp from './components/SignUp'; // Import the SignUp component
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
