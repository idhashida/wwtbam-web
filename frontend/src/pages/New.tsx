import logo from '/logo.png'

export default function New() {
    return (
        <div className='flex-col h-dvh content-center bg-primary-to25'>
            <div className='flex gap-10 w-fit h-fit m-auto p-12 bg-white rounded-md'>
                <div className='w-fit h-fit m-auto'>
                    <img src={ logo } className='w-52'/>
                </div>
                <form className='flex flex-col gap-10 m-auto'>
                    <div>
                        <label>Введите ваше имя</label>
                        <input/>
                    </div>
                    <button>Играть!</button>
                </form>
            </div>
        </div>
    )
}