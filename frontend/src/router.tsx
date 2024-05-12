import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import New from './pages/New';

export const router = createBrowserRouter([
    {
        path: '/game',
        element: (<App/>),
    }, 
    {
        path: '/',
        element: (<New/>),
    }
]);