import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterLogin from './Pages/RegisterLogin/RegisterLogin';
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import ProviderQuizModal from './ContextApi/QuizModal/ProviderQuizModal';
import ProviderModalClose from './ContextApi/ContextModalClose/ProviderModalClose';
import TakeQuiz from './Pages/TakeQuiz/TakeQuiz';

function App() {
  return (
    <>
      <ProviderQuizModal>
        <ProviderModalClose>
          <Router>
              <Routes>
                <Route path="/" element={<RegisterLogin />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/quiz" element={<TakeQuiz/>} />
              </Routes>
            </Router>
        </ProviderModalClose>
      </ProviderQuizModal>
    </>
  );
}

export default App;
