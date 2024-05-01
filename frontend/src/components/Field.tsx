import '../index.css'
import Help from './Help'
import Logo from './Logo'
import PrizeTable from './PrizeTable'

export default function Field() {
    return (
        <div className='p-1 h-dvh bg-primary-default rounded-md'>
            <div className='flex justify-between p-5 gap-5 b2d'>
                <Help/>
                <div className='flex flex-col w-full gap-10 b2d'>
                    <div className="h-full w-full p-5 text-center border-2 border-primary-to50 border-solid rounded-md">
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate commodi quos esse? Optio tempora recusandae provident ducimus consectetur veniam.</h1>
                    </div>
                    <Logo/>
                </div>
                <PrizeTable/>
            </div>
            <div className='flex justify-center h-fit p-5'>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, repellendus.</h1>
            </div>
        </div>
    )
}