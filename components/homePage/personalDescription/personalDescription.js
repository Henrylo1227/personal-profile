import homePage from '../../../pageData/homePage.json';
import { Limelight } from 'next/font/google';
import DiscoverMeBtn from './discoverMeBtn';
import Background from './background';

const limeLight = Limelight({ subsets: ['latin'], weight: '400'});

export default function PersonalDescription() {
  const { content } = homePage;
  const { heading, subHeading, text } = content.description;

  return (
    <section>
      <Background/>
      <div className='description-container absolute top-1/3 max-w-[300px] left-[15%]'>
        <div className='text-5xl my-2'>
          <div className={limeLight.className}>{heading}</div>
        </div>
        <div className='text-3xl my-2 italic font-light'>
          <div>{subHeading}</div>
        </div>
        <div className='text-xl my-1 font-light'>
          <div>{text}</div>
        </div>
        <div className='mt-[20%]'>
          <DiscoverMeBtn/>
      </div>
      </div>
    </section>
  )
}
