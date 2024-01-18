import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RegisterLogin from './Pages/RegisterLogin/RegisterLogin';
import DashboardPage from './Pages/DashboardPage/DashboardPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RegisterLogin />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
