import '../../index.css'
import logo from '/half.png'

export default function Half() {
    return (
        <a onClick={() => {alert("50 на 50")}} className='flex w-20 h-16 cursor-pointer rounded-xl justify-center bg-primary-to50 hover:bg-primary-to25'>
            <img src={logo} className='w-16 h-16'/>
        </a>
    )
}