import '../../index.css'
import logo from '/exchange.png'

export default function Replacement() {
    return (
        <a onClick={() => {alert("Замена вопроса")}} className='flex w-20 h-16 cursor-pointer rounded-xl justify-center bg-primary-to50 hover:bg-primary-to25'>
            <img src={logo} className='w-10 h-10 m-auto'/>
        </a>
    )
}