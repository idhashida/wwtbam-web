import '../index.css'
import PrizeTableElement from './PrizeTableElement'


export default function PrizeTable() {

    const values = [3000000, 1500000, 800000, 400000, 
                    200000, 100000, 50000, 25000, 15000, 
                    10000, 5000, 3000, 2000, 1000, 500]

    let i: number = 15

    return (
        <div className='w-full b2d'>
            <div>
                {values.map(
                    (cur) => <PrizeTableElement index={i--} value={cur}/>
                )}
            </div>
        </div>
    )
}