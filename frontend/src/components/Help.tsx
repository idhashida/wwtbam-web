import '../index.css'
import Call from './HelpButtons/Call'
import FreedomToErr from './HelpButtons/FreedomToErr'
import FromAudience from './HelpButtons/FromAudience'
import Half from './HelpButtons/Half'
import Replacement from './HelpButtons/Replacement'

export default function Help() {
    return (
        <div className='flex w-full justify-end'>
            <div className='flex flex-col gap-5'>
                <FromAudience/>
                <Half/>
                <Call/>
                <FreedomToErr/>
                <Replacement/>
            </div>
        </div>
    )
}