import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RegisterLogin from './Pages/RegisterLogin/RegisterLogin';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RegisterLogin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
