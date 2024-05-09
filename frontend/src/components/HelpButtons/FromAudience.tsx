import '../../index.css'
import logo from '/people.png'

export default function FromAudience() {
    return (
        <a onClick={() => {alert("Помощь зала")}} className='flex w-20 h-16 cursor-pointer rounded-xl justify-center bg-primary-to50 hover:bg-primary-to25'>
            <img src={logo} className='w-12 h-12 m-auto'/>
        </a>
    )
}