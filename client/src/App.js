import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterLogin from './Pages/RegisterLogin/RegisterLogin';
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import ProviderQuizModal from './ContextApi/QuizModal/ProviderQuizModal';
import ProviderModalClose from './ContextApi/ContextModalClose/ProviderModalClose';
import TakeQuiz from './Pages/TakeQuiz/TakeQuiz';
import { QuizProvider } from './ContextApi/QuizContext/QuizContext';

function App() {
  return (
    <>
      <ProviderQuizModal>
        <ProviderModalClose>
          <QuizProvider>
            <Router>
              <Routes>
                <Route path="/" element={<RegisterLogin />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/quiz" element={<TakeQuiz />} />
              </Routes>
            </Router>
          </QuizProvider>
        </ProviderModalClose>
      </ProviderQuizModal>
    </>
  );
}

export default App;
