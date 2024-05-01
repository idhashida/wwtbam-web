import '../../index.css'
import logo from '/logo.png'

export default function FromAudience() {
    return (
        <a onClick={() => {alert("Помощь зала")}} className='cursor-pointer rounded-full hover:bg-primary-to50'>
            <img src={logo} className='w-20'/>
        </a>
    )
}