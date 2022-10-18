import HomePage from '../pages/HomePage';
import SignUpPage from '../pages/SignUpPage';
import logo from '../static/media/imgs/logo.svg';
import { GlobalStyles } from '../static/styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HabitsPage from '../pages/HabitsPage';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/cadastro' element={<SignUpPage />}></Route>
        <Route path='/habitos' element={<HabitsPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
