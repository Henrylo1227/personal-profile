import {AiFillCheckCircle} from 'react-icons/ai';
import {BsClockHistory} from 'react-icons/bs';
export default function ProjectStatus( {isCompleted} ) {
    if (isCompleted === true) {
        return (
            <div className=' text-green-500 m-2'>
                <AiFillCheckCircle/>
            </div>)
    } else {
        return (
            <div className=' text-amber-600 m-2'>
                <BsClockHistory/>
            </div>
        )
    }
}