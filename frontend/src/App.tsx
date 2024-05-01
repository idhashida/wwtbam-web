import Field from './components/Field';
import Title from './components/Title';
import './index.css';


function App() {
  return (
    <div id='game' className='flex flex-col h-dvh p-5 gap-5 bg-primary-to50'>
      <Title/>
      <Field/>
    </div>
  )
}

export default App
