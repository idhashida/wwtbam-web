import '../../index.css'
import logo from '/logo.png'

export default function Call() {
    return (
        <a onClick={() => {alert("Звонок другу")}} className='cursor-pointer rounded-full hover:bg-primary-to50'>
            <img src={logo} className='w-20'/>
        </a>
    )
}