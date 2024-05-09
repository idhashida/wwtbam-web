import '../index.css'
import Answers from './Answers'
import Help from './Help'
import Logo from './Logo'
import PrizeTable from './PrizeTable'

export default function Field() {
    return (
        <div className='flex flex-col p-5 gap-5 h-dvh bg-primary-default rounded-md'>
            <div className='flex justify-between p-5 gap-32'>
                <Help/>
                <div className='flex flex-col w-full gap-10'>
                    <Logo/>
                    <div className="h-full w-full p-5 text-center border-2 border-primary-to50 border-solid rounded-md">
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate commodi quos esse? Optio tempora recusandae provident ducimus consectetur veniam.</h1>
                    </div>
                </div>
                <PrizeTable/>
            </div>
            <div className='flex h-[100%] p-5'>
                <Answers/>
            </div>
        </div>
    )
}