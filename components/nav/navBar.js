import NavBtnMenu from './navBtnMenu';
import NavHomeBtn from './navHomeBtn';

export default function navBar () {
    return (
        <div className='flex justify-between w-screen h-fit fixed bg-dark-grey z-50 text-2xl'>
            <div>
                <NavHomeBtn/>
            </div>
            <div>
                <NavBtnMenu/>
            </div>
        </div>
    );
};