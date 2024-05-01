import '../../index.css'
import logo from '/logo.png'

export default function FreedomToErr() {
    return (
        <a onClick={() => {alert("Право на ошибку")}} className='cursor-pointer rounded-full hover:bg-primary-to50'>
            <img src={logo} className='w-20'/>
        </a>
    )
}