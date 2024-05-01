import '../index.css'
import logo from '/logo.png'

export default function Logo() {
    return (
        <div className='flex w-full h-fit'>
            <img src={logo} className='w-[23rem] h-[23rem] m-auto'/>
        </div>
    )
}