import {createBrowserRouter} from 'react-router-dom';
import App from './App';

export const router = createBrowserRouter([
    {
        path: '/game',
        element: (<App/>),
    }, 
    {
        path: '/',
        element: (<>Окно регистрации</>),
    }
]);