import '../../index.css'
import logo from '/logo.png'

export default function Half() {
    return (
        <a onClick={() => {alert("50 на 50")}} className='cursor-pointer rounded-full hover:bg-primary-to50'>
            <img src={logo} className='w-20'/>
        </a>
    )
}