import Field from "../components/Field";
import Title from "../components/Title";

export default function Game() {
    return (
        <div id='game' className='flex flex-col h-dvh p-5 gap-5 bg-white'>
        <Title/>
        <Field/>
        </div>
    )
}
