import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import Game from './pages/Game';


function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (pathname === '/') {
    navigate('/auth');
  }

  return (
    <Game/>
  )
}

export default App
