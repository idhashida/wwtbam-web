import { useLocation, useNavigate } from 'react-router-dom';
import Field from './components/Field';
import Title from './components/Title';
import './index.css';


function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (pathname === '/') {
    navigate('/auth');
  }

  return (
    <div id='game' className='flex flex-col h-dvh p-5 gap-5 bg-white'>
      <Title/>
      <Field/>
    </div>
  )
}

export default App
