import NavBtnGrp from './navBtnGrp';
import NavHomeBtn from './navHomeBtn';

export default function navBar () {
    return (
        <div className='flex justify-between w-full h-fit fixed bg-dark-grey z-50 text-2xl'>
            <div>
                <NavHomeBtn/>
            </div>
            <div>
                <NavBtnGrp/>
            </div>
            
        </div>
    );
};