import '../../index.css'
import logo from '/muscle.png'

export default function FreedomToErr() {
    return (
        <a onClick={() => {alert("Право на ошибку")}} className='flex w-20 h-16 cursor-pointer rounded-xl justify-center bg-primary-to50 hover:bg-primary-to25'>
            <img src={logo} className='w-12 h-12 m-auto'/>
        </a>
    )
}