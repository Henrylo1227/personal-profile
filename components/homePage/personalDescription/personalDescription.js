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
      <div className='description-container absolute top-1/4 p-3 md:top-1/3 md:left-[15%]'>
        <div className='text-5xl my-2'>
          <div className={limeLight.className}>{heading}</div>
        </div>
        <div className='text-3xl my-2 mx-3 italic font-light brightness-75'>
          <div>{subHeading}</div>
        </div>
        <div className='text-xl my-1 mx-4 font-light max-w-sm'>
          <div>{text}</div>
        </div>
        <div className='flex justify-center mt-[20%] md:justify-start'>
          <DiscoverMeBtn/>
      </div>
      </div>
    </section>
  )
}
